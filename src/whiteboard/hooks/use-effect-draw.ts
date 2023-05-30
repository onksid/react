import { useEffect } from 'react'

import { HistoryItem } from '../type'

function useEffectDraw(
  ctx: CanvasRenderingContext2D | undefined | null,
  history: HistoryItem[],
  currentHistory: number
) {
  useEffect(() => {
    const toRedraw = history.slice(currentHistory)

    if (ctx) {
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      toRedraw.reverse().forEach((historyItem) => {
        ctx.lineWidth = historyItem.width
        if (historyItem.type === 'PENCIL') {
          ctx.strokeStyle = historyItem.color
          ctx.globalCompositeOperation = 'source-over'
        } else if (historyItem.type === 'ERASER') {
          ctx.globalCompositeOperation = 'destination-out'
        }
        ctx.lineCap = 'round'

        ctx.lineJoin = 'round'

        historyItem.points.forEach((point) => {
          ctx.lineTo(point.x, point.y)
          ctx.stroke()
        })

        ctx.stroke()

        ctx.beginPath()
      })
    }
  }, [currentHistory])
}
export default useEffectDraw
