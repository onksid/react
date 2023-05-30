import * as htmlToImage from 'html-to-image'
import tw, { css, styled } from 'twin.macro'

import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react'
import { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'

import { BrushContext } from '../store/brush-context'
import ButtonWhiteBoard from './button'
import IconCamera from './icon/svg/camera'
import { IconHand } from './icon/svg/hand'
import IconMinus from './icon/svg/minus'
import IconPlus from './icon/svg/plus'
import IconRedo from './icon/svg/redo'
import IconTrash from './icon/svg/trash'
import IconUndo from './icon/svg/undo'
import Eraser from './tools/eraser'
import FileDownload from './tools/file-download'
import Hand from './tools/hand'
import Pen from './tools/pen'
import Trash from './tools/trash'
import Zoom from './tools/zoom'

const WrapperNavbarFooter = tw.div`flex h-full items-center gap-2`
export const InputNavbarFooter = tw.input`w-20 text-xs h-10 border-y border-gray-200 px-4 py-[7px] text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:(outline-none border-gray-200)`

type BoxColorProps = {
  isActive?: boolean
}
export const BoxColor = styled.div(({ isActive = true }: BoxColorProps) => [
  isActive ? tw`block` : tw`hidden`,
  tw`absolute -left-1/4 -translate-x-12 bottom-20 rounded-xl bg-white p-3`,
])
export const ColorPickerButton = styled.button(({ color }) => [
  tw`w-10 h-10 rounded-lg`,
  css`
    background-color: ${color};
  `,
])
type NavbarFooterProps = {
  ctx: CanvasRenderingContext2D | undefined | null
  zoomRef: MutableRefObject<ReactZoomPanPinchRef | null>
  refSaveImage: MutableRefObject<HTMLDivElement | null>
  setIsDraw: Dispatch<SetStateAction<boolean>>
  currentHistory: number
  setCurrentHistory: Dispatch<SetStateAction<number>>
}
export default function NavbarFooter({
  setIsDraw,
  ctx,
  zoomRef,
  refSaveImage,
  currentHistory,
  setCurrentHistory,
}: NavbarFooterProps) {
  const [isActive, setIsActive] = useState<string>('pen')
  const brushContext = useContext(BrushContext)
  const brush = brushContext.brush
  const setBrushType = (type: string) => {
    if (type) {
      brushContext.setBrush({
        width: brush.width,
        type: type,
        color: brush.color,
      })
    }
  }

  const saveImage = async () => {
    if (!refSaveImage.current) return
    const dataUrl = await htmlToImage.toPng(refSaveImage.current)
    // download image
    const link = document.createElement('a')
    link.download = 'img.png'
    link.href = dataUrl
    link.click()
  }

  return (
    <div tw="flex py-4 px-6 items-center gap-2 ">
      <div tw="flex gap-2 mr-8">
        <ButtonWhiteBoard
          id="camera"
          active={isActive}
          onClick={() => {
            setIsDraw(false)
            setIsActive('camera')
          }}
        >
          <IconCamera />
        </ButtonWhiteBoard>
        <Trash
          ctx={ctx}
          setCurrentHistory={setCurrentHistory}
          isActive={isActive}
          setIsDraw={setIsDraw}
          setIsActive={setIsActive}
        />
        <div tw="w-4 mr-4 border-r h-10"></div>
        <ButtonWhiteBoard
          onClick={() =>
            brushContext.history.length !== currentHistory &&
            setCurrentHistory(currentHistory + 1)
          }
          id="zoom-out"
        >
          <IconUndo />
        </ButtonWhiteBoard>
        <ButtonWhiteBoard
          onClick={() =>
            currentHistory > 0 && setCurrentHistory(currentHistory - 1)
          }
          id="zoom-out"
        >
          <IconRedo />
        </ButtonWhiteBoard>
      </div>
      <Hand
        isActive={isActive}
        setIsDraw={setIsDraw}
        setIsActive={setIsActive}
      />
      <Pen
        setBrushType={setBrushType}
        isActive={isActive}
        setIsDraw={setIsDraw}
        setIsActive={setIsActive}
      />
      <Eraser
        setBrushType={setBrushType}
        isActive={isActive}
        setIsDraw={setIsDraw}
        setIsActive={setIsActive}
      />
      <FileDownload onClick={saveImage} />
    </div>
  )
}
