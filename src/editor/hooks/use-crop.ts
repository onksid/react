import { useCallback, useRef, useState } from 'react'

function useCrop() {
  const [newCrop, setnewCrop] = useState('')

  const blobUrlRef = useRef('')

  const Crop = useCallback(
    (setCanvasRef?: any) => {
      if (!setCanvasRef?.current) {
        throw new Error('Crop canvas does not exist')
      }

      setCanvasRef.current.toBlob((blob: Blob | MediaSource) => {
        if (!blob) {
          throw new Error('Failed to create blob')
        }
        if (blobUrlRef.current) {
          window.URL.revokeObjectURL(blobUrlRef.current)
        }
        setnewCrop((blobUrlRef.current = URL.createObjectURL(blob)))
      })
    },
    [setnewCrop]
  )
  return { newCrop, Crop }
}
export default useCrop
