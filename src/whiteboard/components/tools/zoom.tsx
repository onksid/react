import tw from 'twin.macro'

import { MutableRefObject, SetStateAction } from 'react'
import { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'

import ButtonWhiteBoard from '../button'
import IconMinus from '../icon/svg/minus'
import IconPlus from '../icon/svg/plus'

export const WrapperZoom = tw.div`flex w-fit items-center disabled:bg-gray-200`

export const InputNavbarFooter = tw.input`w-14 text-xs h-10 border-y border-gray-200 px-4 py-[7px] text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:(outline-none border-gray-200)`

type ZoomProps = {
  zoomRef: MutableRefObject<ReactZoomPanPinchRef | null>
  setIsDraw: (value: SetStateAction<boolean>) => void | undefined
}

export default function Zoom({ zoomRef, setIsDraw }: ZoomProps) {
  //bug
  const zoomOut = () => {
    if (zoomRef.current) {
      const { zoomOut } = zoomRef.current
      zoomOut(1, 100, 'easeInOutQuart')
      setIsDraw(false)
    }
  }
  // bug
  const zoomIn = () => {
    if (zoomRef.current) {
      const { zoomIn } = zoomRef.current
      zoomIn(1, 150, 'easeInOutQuart')
      setIsDraw(false)
    }
  }
  return (
    <WrapperZoom>
      <ButtonWhiteBoard id="zoom-out" rounded="left">
        <IconPlus />
      </ButtonWhiteBoard>
      <InputNavbarFooter />
      <ButtonWhiteBoard id="zoom-in" rounded="right">
        <IconMinus />
      </ButtonWhiteBoard>
    </WrapperZoom>
  )
}
