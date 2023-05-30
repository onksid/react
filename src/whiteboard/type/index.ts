export type CanvasPoint = {
  x: number
  y: number
}

export type HistoryItem = {
  points: Array<CanvasPoint>
  type: string
  color: string
  width: number
}
