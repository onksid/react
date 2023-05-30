import { TLBounds, TLShapeUtil, Utils } from '@tldraw/core'

import { BoxComponent } from './BoxComponent'
import { BoxIndicator } from './BoxIndicator'
import type { BoxShape } from './BoxShape'

export class BoxUtil extends TLShapeUtil<BoxShape, SVGSVGElement> {
  Component = BoxComponent

  Indicator = BoxIndicator

  getBounds = (shape: BoxShape): TLBounds => {
    const [width, height] = shape.size

    const bounds = {
      minX: 0,
      maxX: width,
      minY: 0,
      maxY: height,
      width,
      height,
    }

    return Utils.translateBounds(bounds, shape.point)
  }
}
