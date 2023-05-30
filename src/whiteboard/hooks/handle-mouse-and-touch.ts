import { Dispatch, SetStateAction, useContext, useState } from 'react'

import { BrushContext } from '../store/brush-context'
import { CanvasPoint } from '../type'

function HandleMouse(
  ctx: CanvasRenderingContext2D | undefined | null,
  refCanvas: HTMLCanvasElement | null,
  zoom: number,
  currentHistory: number,
  isDrawing: boolean,
  setCurrentHistory: Dispatch<SetStateAction<number>>
) {
  const [points, setPoints] = useState(Array<CanvasPoint>())

  const brushContext = useContext(BrushContext)

  const brush = brushContext.brush

  const [painting, setPainting] = useState({
    isPainting: false,
    startX: 0,
    startY: 0,
  })

  // handle mouse start
  const onMouseStart = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) return

    if (!painting.isPainting) return

    let rect = (e.target as HTMLElement).getBoundingClientRect()

    let x = (e.clientX - rect.left) / zoom

    let y = (e.clientY - rect.top) / zoom

    if (ctx && refCanvas) {
      setPoints([...points, { x: x, y: y }])

      ctx.lineWidth = brush.width

      if (brush.type === 'PENCIL') {
        ctx.strokeStyle = brush.color
        ctx.globalCompositeOperation = 'source-over'
      } else if (brush.type === 'ERASER') {
        ctx.globalCompositeOperation = 'destination-out'
      }

      ctx.lineCap = 'round'

      ctx.lineJoin = 'round'

      ctx.lineTo(x, y)

      ctx.stroke()
    }
  }

  // handle mouse on click down
  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) return

    e.preventDefault()

    if (ctx && refCanvas) {
      // Reset redo option
      if (currentHistory !== 0) {
        brushContext.setHistory([...brushContext.history].slice(currentHistory))
        setCurrentHistory(0)
      }

      let rect = (e.target as HTMLElement).getBoundingClientRect()
      let x = (e.clientX - rect.left) / zoom
      let y = (e.clientY - rect.top) / zoom

      setPainting({
        isPainting: true,
        startX: x,
        startY: y,
      })
      setPoints([])
    }
  }

  // handle mouse on click Up
  const onMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) return
    onMouseStart(e)
    let rect = (e.target as HTMLElement).getBoundingClientRect()
    let x = (e.clientX - rect.left) / zoom
    let y = (e.clientY - rect.top) / zoom

    brushContext.setHistory([
      {
        type: brush.type,
        color: brush.color,
        width: brush.width,
        points: [...points, { x: x, y: y }],
      },
      ...brushContext.history,
    ])

    setPainting({
      isPainting: false,
      startX: 0,
      startY: 0,
    })

    setPoints([])
    if (ctx) {
      ctx.stroke()
      ctx.beginPath()
    }
  }

  // handle touch on click start
  const touchStart = (e: TouchEvent) => {
    if (!isDrawing) return

    if (ctx && refCanvas) {
      let rect = (e.target as HTMLElement).getBoundingClientRect()
      if (e.touches.length === 1) {
        // Reset redo option
        if (currentHistory !== 0) {
          brushContext.setHistory(
            [...brushContext.history].slice(currentHistory)
          )
          setCurrentHistory(0)
        }

        e.preventDefault()
        let x = (e.touches[0].clientX - rect.left) / zoom
        let y = (e.touches[0].clientY - rect.top) / zoom

        setPainting({
          isPainting: true,
          startX: x,
          startY: y,
        })
        setPoints([])
      }
    }
  }

  // handle touch on click move
  const touchMove = (e: TouchEvent) => {
    if (!isDrawing) return

    if (!painting.isPainting) return

    let rect = (e.target as HTMLElement).getBoundingClientRect()

    if (e.touches.length === 1) {
      e.preventDefault()
      let x = (e.touches[0].clientX - rect.left) / zoom
      let y = (e.touches[0].clientY - rect.top) / zoom

      if (ctx && refCanvas) {
        setPoints([...points, { x: x, y: y }])

        ctx.lineWidth = brush.width
        if (brush.type === 'PENCIL') {
          ctx.strokeStyle = brush.color
          ctx.globalCompositeOperation = 'source-over'
        } else if (brush.type === 'ERASER') {
          ctx.globalCompositeOperation = 'destination-out'
        }

        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.lineTo(x, y)
        ctx.stroke()
      }
    }
  }

  // handle touch on click end
  const touchEnd = (e: TouchEvent) => {
    if (!isDrawing) return

    touchMove(e)
    e.preventDefault()

    brushContext.setHistory([
      {
        type: brush.type,
        color: brush.color,
        width: brush.width,
        points: [...points],
      },
      ...brushContext.history,
    ])

    setPainting({
      isPainting: false,
      startX: 0,
      startY: 0,
    })

    setPoints([])
    if (ctx) {
      ctx.stroke()
      ctx.beginPath()
    }
  }
  return {
    onMouseStart,
    onMouseDown,
    onMouseUp,
    touchStart,
    touchMove,
    touchEnd,
    setPainting,
  }
}
export default HandleMouse
