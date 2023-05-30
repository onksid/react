import { useCallback, useState } from 'react'

export default function useZoom(value?: number) {
  const [zoom, setZoom] = useState((value = 100))

  const icrement = useCallback(() => {
    if (zoom === 300) {
      return setZoom(300)
    }
    return setZoom(zoom + 10)
  }, [zoom, setZoom])

  const decrement = useCallback(() => {
    if (zoom === 0) {
      return setZoom(0)
    }
    return setZoom(zoom - 10)
  }, [zoom, setZoom])

  const disableButtonPlus = zoom === 300 ? true : false

  const disableButtonMin = zoom === 0 ? true : false

  return { icrement, decrement, zoom, disableButtonMin, disableButtonPlus }
}
