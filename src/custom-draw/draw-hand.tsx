import { getStroke } from 'perfect-freehand'

import * as React from 'react'

import { getSvgPathFromStroke } from './utils'

const options = {
  size: 10,
  thinning: 0.5,
  smoothing: 0.5,

  streamline: 0.5,
  easing: (t: any) => t,
  start: {
    taper: 0,
    easing: (t: any) => t,
    cap: true,
  },
  end: {
    taper: 100,
    easing: (t: any) => t,
    cap: true,
  },
}

export default function DrawHand() {
  const [points, setPoints] = React.useState<any>([])

  function handlePointerDown(e: any) {
    e.target.setPointerCapture(e.pointerId)
    setPoints([[e.pageX, e.pageY, e.pressure]])
  }

  function handlePointerMove(e: any) {
    if (e.buttons !== 1) return
    setPoints([...points, [e.pageX, e.pageY, e.pressure]])
  }

  const stroke = getStroke(points, options)
  const pathData = getSvgPathFromStroke(stroke)
  return (
    <svg
      tw="h-screen w-screen"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      style={{
        touchAction: 'none',
        backgroundImage:
          'url(https://thumb.viva.co.id/media/frontend/thumbs3/2020/08/24/5f43d3739d455-jisoo-blackpink_1265_711.jpg)',
      }}
    >
      {points && <path d={pathData} />}
    </svg>
  )
}
