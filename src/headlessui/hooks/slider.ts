import { useState } from 'react'

import { SliderDot } from '../slider/slider.style'

export default function useSlider(data: any, dot: React.ReactNode) {
  let [isShowing, setIsShowing] = useState(0)

  let [position, setPosition] = useState('right')

  const [getData] = useState(data.length)

  const isPrev = isShowing >= 1

  const onPrev = () => {
    setIsShowing(isShowing - 1)
    setPosition('left')
  }

  const isNext = isShowing !== getData - 1

  const onNext = () => {
    setIsShowing(isShowing + 1)
    setPosition('right')
  }
  const rows = []
  let dataLength = 0

  for (dataLength; dataLength < getData; dataLength++) {
    rows.push(dot)
  }

  return {
    rows,
    dataLength,
    isShowing,
    position,
    isNext,
    isPrev,
    onPrev,
    onNext,
  }
}
