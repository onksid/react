import React, { useCallback, useEffect, useRef, useState } from 'react'

interface CanvasProps {
  width: number
  height: number
}

type Coordinate = {
  x: number
  y: number
}

const CobaGambar = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPainting, setIsPainting] = useState(false)
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined
  )

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event)
    if (coordinates) {
      setMousePosition(coordinates)
      setIsPainting(true)
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const canvas: HTMLCanvasElement = canvasRef.current
    canvas.addEventListener('mousedown', startPaint)
    return () => {
      canvas.removeEventListener('mousedown', startPaint)
    }
  }, [startPaint])

  const paint = useCallback(
    (event: MouseEvent) => {
      if (isPainting) {
        const newMousePosition = getCoordinates(event)
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition)
          setMousePosition(newMousePosition)
        }
      }
    },
    [isPainting, mousePosition]
  )

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const canvas: HTMLCanvasElement = canvasRef.current
    canvas.addEventListener('mousemove', paint)
    return () => {
      canvas.removeEventListener('mousemove', paint)
    }
  }, [paint])

  const exitPaint = useCallback(() => {
    setIsPainting(false)
    setMousePosition(undefined)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const canvas: HTMLCanvasElement = canvasRef.current
    canvas.addEventListener('mouseup', exitPaint)
    canvas.addEventListener('mouseleave', exitPaint)
    return () => {
      canvas.removeEventListener('mouseup', exitPaint)
      canvas.removeEventListener('mouseleave', exitPaint)
    }
  }, [exitPaint])

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return
    }

    const canvas: HTMLCanvasElement = canvasRef.current
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    }
  }

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) {
      return
    }
    const canvas: HTMLCanvasElement = canvasRef.current
    const context = canvas.getContext('2d')
    if (context) {
      context.strokeStyle = 'red'
      context.lineJoin = 'round'
      context.lineWidth = 5
      context.beginPath()
      console.log(context.setTransform(1, 0.5, -0.5, 1, 30, 10))
      context.moveTo(originalMousePosition.x, originalMousePosition.y)
      context.lineTo(newMousePosition.x, newMousePosition.y)
      console.log(context.lineTo(newMousePosition.x, newMousePosition.y))
      context.closePath()

      context.stroke()
    }
  }

  return <canvas ref={canvasRef} height={height} width={width} />
}

CobaGambar.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
}

export default CobaGambar