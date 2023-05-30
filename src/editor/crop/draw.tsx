import tw, { css, styled } from 'twin.macro'

import { useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import { Context } from 'react-zoom-pan-pinch'

type DrawProps = {
  imgSrc?: string
  refCanvas?: any
  getData?: string
  scale?: number
  setData?: any
}
export const WrapperDraw = tw.div`relative touch-auto !w-[calc(100vw-248px)] h-[calc(100vh-72px)]  bg-gray-100 p-6`
type ImageDrawProps = {
  scale?: number
}
export const ImageDraw = styled.img(({ scale }: ImageDrawProps) => [
  css`
    scale: ${scale}%;
  `,
])
export default function Draw({
  imgSrc,
  refCanvas,
  scale = 100,
  getData,
  setData,
}: DrawProps) {
  const connvertZoom = scale / 100
  return (
    <WrapperDraw>
      <CanvasDraw
        ref={refCanvas}
        loadTimeOffset={0}
        saveData={getData}
        tw="!w-full !h-full !bg-transparent "
        catenaryColor="red"
        enablePanAndZoom
        brushColor="red"
        imgSrc={imgSrc}
        hideGridX
        hideGridY
        lazyRadius={0}
        brushRadius={3}
      />
    </WrapperDraw>
  )
}
