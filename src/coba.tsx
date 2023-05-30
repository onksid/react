import { Canvas, TLLineShape, TldrawEditor, useApp } from '@tldraw/tldraw'
import '@tldraw/tldraw/editor.css'

import { useEffect } from 'react'
import { track } from 'signia-react'

import './custom-ui.css'

export default function Example() {
  return (
    <div className="tldraw__editor" tw="h-screen w-screen relative">
      <TldrawEditor>
        <Canvas />
        <CustomUi />
      </TldrawEditor>
    </div>
  )
}

const CustomUi = track(() => {
  const app = useApp()

  useEffect(() => {
    app.setBrush({ x: 0, y: 0, w: 100, h: 100 })
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
          data-isactive={app.currentToolId === 'asset'}
          onClick={() => app.setSelectedTool('asset')}
        >
          asset
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
          data-isactive={app.currentToolId === 'hand'}
          onClick={() => app.setSelectedTool('hand')}
        >
          Hand
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'draw'}
          onClick={() => {
            app.setSelectedTool('draw')
          }}
        >
          Pencil
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'eraser'}
          onClick={() => {
            app.setSelectedTool('eraser')
          }}
        >
          Eraser
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'zoomOut'}
          onClick={() => {
            app.zoomOut()
          }}
        >
          zoom out
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'zoomIn'}
          onClick={() => {
            app.zoomIn()
          }}
        >
          zoom in
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'zoomLevel'}
          onClick={() => {
            app.zoomLevel
          }}
        >
          {app.zoomLevel}
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'undo'}
          onClick={() => {
            app.undo()
          }}
        >
          undo
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'redo'}
          onClick={() => {
            app.redo()
          }}
        >
          redo
        </button>
        <button
          className="custom-button"
          data-isactive={app.currentToolId === 'redo'}
          onClick={() => {
            app.getStateDescendant('select.draw')
            app.getCssColor('blue')
          }}
        >
          cobassss
        </button>
      </div>
    </div>
  )
})
