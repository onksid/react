import { fabric } from 'fabric'
import { Canvas } from 'fabric/fabric-impl'
import getStroke from 'perfect-freehand'

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch'

function App() {
  const refCanvas = useRef<HTMLCanvasElement | null>(null)
  const [canvas, setCanvas] = useState<Canvas>()
  const [color, setColor] = useState('black')
  const initCanvas = new fabric.Canvas(refCanvas.current, {
    height: 800,
    width: 1920,
    backgroundColor: 'red',
    isDrawingMode: true,
  })

  useEffect(() => {
    setCanvas(initCanvas)
  }, [])
  initCanvas.on('mouse:wheel', function (opt) {
    var delta = opt.e.deltaY
    var zoom = initCanvas.getZoom()
    opt.e.preventDefault()
    opt.e.stopPropagation()
    if (opt.e.ctrlKey) {
      zoom = zoom + delta / 200
      if (zoom > 20) zoom = 20
      if (zoom < 1) zoom = 1
      initCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom)
      initCanvas.setZoom(zoom)
    } else {
      var e = opt.e
      var vpt = initCanvas?.viewportTransform
      if (vpt) {
        vpt[4] += e.deltaX
        vpt[5] += e.deltaY
      }
    }
  })
  const hemm = (props: any) => {
    const pen = new fabric.PencilBrush(props)
    pen.width = 30
  }
  initCanvas.freeDrawingBrush.color = 'black'
  initCanvas.freeDrawingBrush.width = 10

  return (
    <>
      <canvas ref={refCanvas} />
      <button onClick={() => hemm(initCanvas)}>eraser</button>
    </>
  )
}
export default App
