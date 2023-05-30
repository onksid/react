import { useRef, useState } from 'react'
import { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'

import ButtonWhiteBoard from './components/button'
import IconPlus from './components/icon/svg/plus'
import NavbarFooter from './components/navbar-footer'
import Sidebar from './components/sidebar'
import DrawingBoard from './drawing-board'
import useEffectChangeZoom from './hooks/use-effect-change-zoom'
import useEffectDraw from './hooks/use-effect-draw'
import { BrushContext } from './store/brush-context'
import { HistoryItem } from './type'
import { ContentWhiteBoard, WrapperWhiteBoard } from './white-board.style'

//https://github.com/iEranDEV/drawing-app/blob/master/src/components/AccessibilityBar.tsx
//https://drawing-app-flax.vercel.app/
//https://www.youtube.com/watch?v=VHIEhgLS7uE

//take photo
//https://codepen.io/eehakkin/pen/XWbOVxp/left?editors=1010

function Whiteboard() {
  const zoomRef = useRef<ReactZoomPanPinchRef | null>(null)
  const refSaveImage = useRef<HTMLDivElement | null>(null)

  const [ctx, setCtx] = useState<CanvasRenderingContext2D | undefined | null>(
    null
  )

  const [zoom, setZoom] = useState(1)

  const [brush, setBrush] = useState({
    type: 'PENCIL',
    width: 10,
    color: 'red',
  })

  const [history, setHistory] = useState(Array<HistoryItem>())

  const [currentHistory, setCurrentHistory] = useState(0)
  const [isDraw, setIsDraw] = useState<boolean>(true)

  useEffectDraw(ctx, history, currentHistory)

  useEffectChangeZoom(zoom, setZoom, isDraw)
  console.log(history)

  return (
    <BrushContext.Provider value={{ brush, setBrush, history, setHistory }}>
      <WrapperWhiteBoard>
        <Sidebar />
        <ContentWhiteBoard>
          <DrawingBoard
            refSaveImage={refSaveImage}
            zoomRef={zoomRef}
            setZoom={setZoom}
            isDraw={isDraw}
            ctx={ctx}
            setCtx={setCtx}
            setCurrentHistory={setCurrentHistory}
            currentHistory={currentHistory}
            zoom={zoom}
            isActiveZoom={true}
          />
          <div tw="absolute bottom-20 flex gap-4 justify-between right-6 items-center -translate-y-2 left-6 z-20">
            <div tw="flex items-center gap-2">
              <button tw="w-10 h-10 overflow-hidden rounded-lg">
                <img
                  tw="w-full h-full object-cover"
                  src="https://e1.pxfuel.com/desktop-wallpaper/543/554/desktop-wallpaper-karina-aespa-savage-pc.jpg"
                />
              </button>
              <button tw="w-9 h-9 flex items-center justify-center text-gray-500 border border-gray-200 rounded-lg bg-white">
                <IconPlus />
              </button>
            </div>
            <div tw="flex gap-2 backdrop-blur-md bg-white/30 rounded-lg px-4 py-2">
              <div tw="w-10 h-10 overflow-hidden rounded-full">
                <img
                  tw="w-full h-full object-cover"
                  src="https://e1.pxfuel.com/desktop-wallpaper/543/554/desktop-wallpaper-karina-aespa-savage-pc.jpg"
                />
              </div>
              <div>
                <div tw="text-sm font-semibold text-gray-900">
                  Chelsea Kamila
                </div>
                <div tw="text-xs text-gray-900">
                  Tangerang - <span tw="text-gray-700"> 0824 5666 1230</span>
                </div>
              </div>
            </div>
          </div>
          <NavbarFooter
            refSaveImage={refSaveImage}
            currentHistory={currentHistory}
            setCurrentHistory={setCurrentHistory}
            zoomRef={zoomRef}
            ctx={ctx}
            setIsDraw={setIsDraw}
          />
        </ContentWhiteBoard>
      </WrapperWhiteBoard>
    </BrushContext.Provider>
  )
}
export default Whiteboard
