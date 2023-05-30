import { TLHandle } from '@tldraw/core'
import {
  Canvas,
  ContextMenu,
  TLCamera,
  TldrawEditor,
  TldrawUi,
  useApp,
  useTools,
} from '@tldraw/tldraw'
import '@tldraw/tldraw/editor.css'

import { useCallback, useEffect, useState } from 'react'
import { track } from 'signia-react'

import './custom-ui.css'

export function Tl() {
  return (
    <div tw="fixed left-0 right-0 top-0  bottom-0 bg-gray-100">
      <TldrawEditor>
        <TldrawUi>
          <ContextMenu>
            <Canvas />
          </ContextMenu>
        </TldrawUi>
        <CustomUi />
      </TldrawEditor>
    </div>
  )
}

const CustomUi = track(() => {
  const app = useApp()
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Delete':
        case 'Backspace': {
          app.deleteShapes()
        }
      }
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  })

  return (
    <div className="custom-layout">
      <div className="custom-toolbar">
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'zoomIn'}
          onClick={() =>
            app.zoomIn(app.viewportScreenCenter, { duration: 120 })
          }
        >
          ZoomIn
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'zoomOut'}
          onClick={() =>
            app.zoomOut(app.viewportScreenCenter, { duration: 120 })
          }
        >
          zoomOut
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'hand'}
          onClick={() => app.setSelectedTool('hand')}
        >
          hand
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'select'}
          onClick={() => app.setSelectedTool('select')}
        >
          Select
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'draw'}
          onClick={() => app.setSelectedTool('draw')}
        >
          Pencil
        </button>
        <button
          className="custom-button"
          onClick={() => console.log(app.getCssColor('red'))}
        >
          m
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'eraser'}
          onClick={() => app.setSelectedTool('eraser')}
        >
          Eraser
        </button>
      </div>
    </div>
  )
})
