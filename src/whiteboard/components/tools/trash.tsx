import tw, { styled } from 'twin.macro'

import { Dispatch, SetStateAction, useContext, useRef } from 'react'

import useClickAnyWay from '../../hooks/custom/use-click-anyway'
import { BrushContext } from '../../store/brush-context'
import ButtonWhiteBoard from '../button'
import IconTrash from '../icon/svg/trash'

export const WrapperEraser = tw.div`relative h-10`

type WrapperModalEraserProps = {
  isActive?: boolean
}

export const WrapperModalEraser = styled.div(
  ({ isActive = false }: WrapperModalEraserProps) => [
    !isActive
      ? tw`translate-y-36 -z-10 opacity-0 invisible`
      : tw`translate-y-0 z-30 visible opacity-100`,
    tw`ease-in-out duration-150 relative`,
  ]
)

export const ContentModalEraser = tw.div`absolute w-60 -translate-x-12 bottom-0 -translate-y-16 rounded-xl bg-white p-3`

type EraserProps = {
  ctx: CanvasRenderingContext2D | undefined | null
  isActive?: string
  setIsDraw: (value: SetStateAction<boolean>) => void | undefined
  setIsActive: (value: SetStateAction<string>) => void | undefined
  setCurrentHistory: Dispatch<SetStateAction<number>>
}

export default function Trash({
  ctx,
  isActive,
  setIsDraw,
  setIsActive,
  setCurrentHistory,
}: EraserProps) {
  const modalRefEraser = useRef<HTMLDivElement | null>(null)

  const brushContext = useContext(BrushContext)

  const { state, onClick, onClickInside } = useClickAnyWay(modalRefEraser)

  // todo add remove file image
  const onClickDeleteFile = () => {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = 'rgb(0,0,0,0)'
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    brushContext.setHistory([])
    setCurrentHistory(0)
    onClickInside()
    setIsActive('pen')
  }
  const emptyFile = brushContext.history.length === 0

  return (
    <WrapperEraser ref={modalRefEraser}>
      <ButtonWhiteBoard
        id="trash"
        disable={emptyFile}
        active={isActive}
        onClick={() => {
          setIsDraw(true)
          onClick()
          setIsActive('trash')
        }}
      >
        <IconTrash />
      </ButtonWhiteBoard>
      <WrapperModalEraser isActive={state}>
        <ContentModalEraser>
          <div tw="text-sm text-gray-700 pb-6 pt-2">
            Apakah anda ingin menghapus file ini?
          </div>
          <div tw="flex gap-2 items-center text-xs text-gray-500">
            <input type="checkbox" />
            Hapus Dengan Gambar
          </div>
          <div tw="flex justify-between gap-2 mt-3 bg-gray-50 rounded-lg p-1">
            <button tw="h-8 w-full text-sm px-6 rounded-lg">cancel</button>
            <button
              onClick={onClickDeleteFile}
              tw="h-8 w-full text-sm px-6 bg-red-100 rounded-lg text-red-700"
            >
              Delete
            </button>
          </div>
        </ContentModalEraser>
      </WrapperModalEraser>
    </WrapperEraser>
  )
}
