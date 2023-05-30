import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { useRef } from 'react'
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
  useControls,
} from 'react-zoom-pan-pinch'

import {
  BackgroundDrawingBoard,
  CanvasDrawingBoard,
  ContentDrawingBoard,
  ImageDrawingBoard,
  WrapperDrawingBoard,
} from './drawing-board.style'
import HandleMouse from './hooks/handle-mouse-and-touch'
import useEffectCreateCanvas from './hooks/use-effect-create-canvas'
import useEffectHandleTouch from './hooks/use-effect-handle-touch'

type DrawingBoardProps = {
  zoom: number
  zoomRef: MutableRefObject<ReactZoomPanPinchRef | null>
  setZoom: Dispatch<SetStateAction<number>>
  refSaveImage: MutableRefObject<HTMLDivElement | null>
  setCurrentHistory: Dispatch<SetStateAction<number>>
  ctx: CanvasRenderingContext2D | undefined | null
  setCtx: Dispatch<SetStateAction<CanvasRenderingContext2D | null | undefined>>
  currentHistory: number
  isActiveZoom: boolean
  isDraw: boolean
}

export default function DrawingBoard({
  zoom,
  zoomRef,
  setZoom,
  refSaveImage,
  setCurrentHistory,
  ctx,
  setCtx,
  currentHistory,
  isDraw = true,
}: DrawingBoardProps) {
  const refDrawingBoard = useRef<HTMLCanvasElement | null>(null)

  // create canvas
  useEffectCreateCanvas(setCtx, refDrawingBoard, zoom)

  // handle mouse events
  const {
    onMouseStart,
    onMouseDown,
    onMouseUp,
    touchStart,
    touchMove,
    touchEnd,
    setPainting,
  } = HandleMouse(
    ctx,
    refDrawingBoard.current,
    zoom,
    currentHistory,
    isDraw,
    setCurrentHistory
  )

  // useEffect handle touch events
  useEffectHandleTouch(ctx, refDrawingBoard, touchStart, touchMove, touchEnd)
  return (
    <WrapperDrawingBoard ref={refSaveImage}>
      <TransformWrapper
        ref={zoomRef}
        minScale={1}
        maxScale={2}
        disabled={isDraw}
        onZoom={(e) => {
          setZoom(e.state.scale)
        }}
      >
        <TransformComponent>
          <ContentDrawingBoard>
            <CanvasDrawingBoard
              ref={refDrawingBoard}
              onMouseMove={(e) => onMouseStart(e)}
              onMouseLeave={(e) => {
                onMouseStart(e)
                setPainting({
                  isPainting: false,
                  startX: 0,
                  startY: 0,
                })
              }}
              onMouseUp={(e) => onMouseUp(e)}
              onMouseDown={(e) => onMouseDown(e)}
            />
            <BackgroundDrawingBoard>
              <ImageDrawingBoard src="https://1.bp.blogspot.com/-xF_RaLi2N5k/V77LKpFrssI/AAAAAAAABMQ/3KS98a2pGLMudQ8CRL_Vj_DQTFnvgm8bwCLcB/s1600/Black%2BPink%2BJisoo%2BLatest%2BPhotos%2B-%2BKim%2BJi-soo%2BPictures%2Band%2BImages%2B-%2Bbiotist.blogspot.com%2B%252816%2529.jpg" />
            </BackgroundDrawingBoard>
          </ContentDrawingBoard>
        </TransformComponent>
      </TransformWrapper>
    </WrapperDrawingBoard>
  )
}
function usestate(arg0: number): [any, any] {
  throw new Error('Function not implemented.')
}
