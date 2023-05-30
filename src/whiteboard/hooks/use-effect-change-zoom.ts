import { useEffect } from 'react'

function useEffectChangeZoom(zoom: number, setZoom: Function, isDraw: boolean) {
  useEffect(() => {
    const changeZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault()
        if (isDraw === true) return
        if (zoom <= 1) {
          setZoom(1)
        }
        let val = 0
        if (e.deltaY > 0) {
          val = 10
        } else if (e.deltaY < 0) {
          val = -10
        }
        const value = zoom * 50 - val
        if (value >= 50 && value <= 100) setZoom(value / 50)
      }
    }

    document.addEventListener('wheel', changeZoom, {
      capture: true,
      passive: false,
    })

    const disableScrollMobile = (e: TouchEvent) => {
      if ((e.target as any).localName === 'canvas' && e.touches.length === 1) {
        e.preventDefault()
      } else if (e.touches.length > 1) {
        e.stopPropagation()
      }
    }

    document.addEventListener('touchmove', disableScrollMobile, {
      passive: false,
      capture: true,
    })

    return () => {
      document.removeEventListener('wheel', changeZoom, true)
    }
  }, [zoom])
}
export default useEffectChangeZoom
