import { MutableRefObject, useEffect } from 'react'

function useEffectHandleTouch(
  ctx: CanvasRenderingContext2D | undefined | null,
  refDrawingBoard: MutableRefObject<HTMLCanvasElement | null>,
  touchStart: (this: HTMLCanvasElement, ev: TouchEvent) => any,
  touchMove: (this: HTMLCanvasElement, ev: TouchEvent) => any,
  touchEnd: (this: HTMLCanvasElement, ev: TouchEvent) => any
) {
  useEffect(() => {
    if (ctx && refDrawingBoard.current) {
      refDrawingBoard.current.addEventListener('touchstart', touchStart, {
        passive: false,
      })
      refDrawingBoard.current.addEventListener('touchmove', touchMove, {
        passive: false,
      })
      refDrawingBoard.current.addEventListener('touchend', touchEnd, {
        passive: false,
      })
    }

    return () => {
      refDrawingBoard.current?.removeEventListener('touchstart', touchStart)
      refDrawingBoard.current?.removeEventListener('touchmove', touchMove)
      refDrawingBoard.current?.removeEventListener('touchend', touchEnd)
    }
  })
}
export default useEffectHandleTouch
