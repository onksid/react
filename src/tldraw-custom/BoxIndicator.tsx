import { TLShapeUtil } from '@tldraw/core'

import { BoxShape } from './BoxShape'

export const BoxIndicator = TLShapeUtil.Indicator<BoxShape>(({ shape }) => {
  return (
    <rect
      fill="none"
      stroke="dodgerblue"
      strokeWidth={1}
      width={shape.size[0]}
      height={shape.size[1]}
    />
  )
})
