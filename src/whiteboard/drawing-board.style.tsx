import tw from 'twin.macro'

export const WrapperDrawingBoard = tw.div`h-[calc(100vh-72px)] w-[calc(100vw-320px)] cursor-crosshair overflow-auto bg-gray-100`

export const ContentDrawingBoard = tw.div`relative h-[calc(100vh-72px)] w-[calc(100vw-320px)]`

export const CanvasDrawingBoard = tw.canvas`relative z-10`

export const BackgroundDrawingBoard = tw.div`absolute bottom-0 left-0 right-0 top-0`

export const ImageDrawingBoard = tw.img`h-full w-full object-cover`
