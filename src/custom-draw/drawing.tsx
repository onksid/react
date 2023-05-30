import tw, { styled } from 'twin.macro'

import { useRef, useState } from 'react'
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas'
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch'

import Button from './components/button'
import {
  ContentNavbarFooter,
  MainNavbarFooter,
  WrapperNavbarFooter,
} from './components/navbar-footer'
import IconCamera from './components/svg/camera'
import IconEraser from './components/svg/eraser'
import IconMinus from './components/svg/minus'
import { IconPen } from './components/svg/pen'
import IconPlus from './components/svg/plus'
import IconRedo from './components/svg/redo'
import IconTrash from './components/svg/trash'
import IconUndo from './components/svg/undo'

type InputProps = {
  active?: boolean
}
export const Input = tw.input`mr-6 w-16 rounded-lg border border-gray-200 px-4 py-2 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:(outline-none border-primary-500)`
export const Submenu = styled.div(({ active = true }: InputProps) => [
  !active
    ? tw`hidden -translate-x-20 w-0 -z-10`
    : tw`block translate-x-0 w-fit`,
  tw`flex ease-linear duration-200 gap-2 items-center`,
])
export default function Drawing() {
  const canvas = useRef<ReactSketchCanvasRef | null>(null)
  const zoomref = useRef<ReactZoomPanPinchRef | null>(null)
  const [activeButton, setActiveButton] = useState('1')
  const [color, setColor] = useState('#1D2939')
  const [zoom, setZoom] = useState(true)
  const [eraserWidth, seteraserWidth] = useState(3)
  const [strokeWidth, setstrokeWidth] = useState(3)

  const [y, setY] = useState(true)
  // <input value={y} onChange={(e) => setY(+e.target.value)} />
  //  <input value={x} onChange={(e) => setX(+e.target.value)} />

  return (
    <div tw="h-screen w-screen flex">
      <div tw="h-full border-r w-80">hello</div>
      <div tw="w-[calc(100vw-320px)] ">
        <div tw="h-[calc(100vh-82px)] w-full relative overflow-scroll bg-gray-100">
          <TransformWrapper ref={zoomref} disabled={zoom}>
            <TransformComponent>
              <ReactSketchCanvas
                tw="!object-cover m-auto !border-none"
                ref={canvas}
                height="calc(100vh - 82px)"
                width="calc(100vw - 320px)"
                eraserWidth={eraserWidth}
                canvasColor="none"
                strokeWidth={strokeWidth}
                strokeColor={color}
                preserveBackgroundImageAspectRatio="4/3"
                backgroundImage="https://wallpapers.com/images/high/adidas-endorser-jisoo-9c9oyrhsykf4ctam.webp"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <WrapperNavbarFooter>
          <ContentNavbarFooter>
            <MainNavbarFooter>
              <Button>
                <IconCamera />
              </Button>
              <Button>
                <IconTrash />
              </Button>
            </MainNavbarFooter>
            <Button
              id="1"
              active={activeButton}
              onClick={() => {
                setZoom(true)
                setActiveButton('1')
                canvas.current?.eraseMode(false)
                setY((item) => !item)
              }}
            >
              <IconPen />
            </Button>
            <div tw="relative">
              <div tw="absolute bg-white border border-gray-200 py-2 flex flex-col gap-2 items-center rounded-lg -top-32">
                <div tw="text-xs text-gray-500 font-semibold pb-2">
                  Select Color
                </div>
                <div tw="flex gap-2 items-center px-2">
                  <button
                    onClick={() => setColor('#F04438')}
                    tw="w-6 h-6 bg-red-500 rounded-lg hover:bg-red-600"
                  />
                  <button
                    onClick={() => setColor('#9E77ED')}
                    tw="w-6 h-6 bg-primary-500 rounded-lg hover:bg-primary-600"
                  />
                  <button
                    onClick={() => setColor('#1D2939')}
                    tw="w-6 h-6 bg-gray-800 rounded-lg hover:bg-gray-900"
                  />
                </div>
                <div tw="flex gap-2 items-center px-2">
                  <button
                    onClick={() => setColor('#12B76A')}
                    tw="w-6 h-6 bg-green-500 rounded-lg hover:bg-green-600"
                  />
                  <button
                    onClick={() => setColor('#F79009')}
                    tw="w-6 h-6 bg-yellow-500 rounded-lg hover:bg-yellow-600"
                  />
                  <button
                    onClick={() => setColor('#FFFFFF')}
                    tw="w-6 h-6 bg-white border border-gray-200 hover:border-gray-400 rounded-lg"
                  />
                </div>
              </div>
              <div tw="overflow-hidden">
                <Submenu active={activeButton === '1'}>
                  <button tw="w-10 h-10 bg-red-500 rounded-lg" />
                  <Input
                    value={strokeWidth}
                    type="number"
                    onChange={(e) => {
                      setstrokeWidth(+e.target.value)
                    }}
                  />
                </Submenu>
              </div>
            </div>
            <div tw="flex gap-2 overflow-hidden">
              <Button
                id="2"
                active={activeButton}
                onClick={() => {
                  setActiveButton('2')
                  canvas.current?.eraseMode(true)
                }}
              >
                <IconEraser />
              </Button>
              <div tw="overflow-hidden">
                <Submenu active={activeButton === '2'}>
                  <input
                    value={eraserWidth}
                    type="number"
                    tw="py-2 px-4 w-16 text-center mr-6 border border-gray-200 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:(outline-none border-primary-500)"
                    onChange={(e) => {
                      seteraserWidth(+e.target.value)
                    }}
                  />
                </Submenu>
              </div>
            </div>
            <Button
              onClick={() => {
                canvas.current?.undo()
              }}
            >
              <IconUndo />
            </Button>
            <Button
              onClick={() => {
                canvas.current?.redo()
              }}
            >
              <IconRedo />
            </Button>
            <Button
              onClick={() => {
                setZoom(false)
                zoomref.current?.zoomIn()
              }}
            >
              <IconPlus />
            </Button>
            <Button
              onClick={() => {
                zoomref.current?.zoomOut()
              }}
            >
              <IconMinus />
            </Button>
          </ContentNavbarFooter>
          <div tw="flex gap-4">
            <button tw="px-12 py-2 text-sm font-semibold h-10 rounded-lg bg-primary-50 text-primary-700">
              Cancel
            </button>
            <button tw="px-12 py-2 text-sm font-semibold h-10 bg-primary-600 rounded-lg text-white">
              Save
            </button>
          </div>
        </WrapperNavbarFooter>
      </div>
    </div>
  )
}
