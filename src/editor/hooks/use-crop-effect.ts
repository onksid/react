import { useEffect, useRef, useState } from 'react'
import { PixelCrop } from 'react-image-crop'

import { canvasPreview } from '../../canvasPreview'

function UseCropEffect() {
  const setCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        setCanvasRef.current
      ) {
        canvasPreview(imgRef.current, setCanvasRef.current, completedCrop)
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [completedCrop])

  return { imgRef, setCanvasRef, completedCrop, setCompletedCrop }
}
export default UseCropEffect
