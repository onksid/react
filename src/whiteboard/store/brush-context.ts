import { createContext } from 'react'

import { HistoryItem } from '../type'

export const BrushContext = createContext({
  brush: { type: 'PENCIL', width: 10, color: '#d946ef' },
  setBrush: (brush: { type: string; width: number; color: string }) => {},
  history: Array<HistoryItem>(),
  setHistory: (history: Array<HistoryItem>) => {},
})
