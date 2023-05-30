import { MutableRefObject, useEffect } from 'react'

function useEffectCreateCanvas(
  setCtx: Function,
  refDrawingBoard: MutableRefObject<HTMLCanvasElement | null>,
  zoom: number
) {
  useEffect(() => {
    setCtx(refDrawingBoard.current?.getContext('2d'))

    if (refDrawingBoard.current) {
      refDrawingBoard.current.width = document.body.clientWidth
      refDrawingBoard.current.height = document.body.clientHeight

      const dataRefDrawingBoard = refDrawingBoard.current.getContext('2d')
      if (dataRefDrawingBoard) {
        dataRefDrawingBoard.fillStyle = 'rgba(0, 0, 0, 0)'
        dataRefDrawingBoard.fillRect(
          0,
          0,
          refDrawingBoard.current.clientWidth,
          refDrawingBoard.current.clientHeight
        )
      }
    }
  }, [refDrawingBoard])
}
export default useEffectCreateCanvas
