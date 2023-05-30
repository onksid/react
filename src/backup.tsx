import { fabric } from 'fabric'
import { Canvas } from 'fabric/fabric-impl'

import { useCallback, useEffect, useRef, useState } from 'react'

const ErasedGroup = fabric.util.createClass(fabric.Group, {
  original: null,
  erasedPath: null,
  initialize: function (
    original: any,
    erasedPath: any,
    options: any,
    isAlreadyGrouped: any
  ) {
    this.original = original
    this.erasedPath = erasedPath
    this.callSuper(
      'initialize',
      [this.original, this.erasedPath],
      options,
      isAlreadyGrouped
    )
  },

  _calcBounds: function (onlyWidthHeight: any) {
    const aX = [],
      aY = [],
      props = ['tr', 'br', 'bl', 'tl'],
      jLen = props.length,
      ignoreZoom = true

    let o = this.original
    o.setCoords(ignoreZoom)
    for (let j = 0; j < jLen; j++) {
      const prop = props[j]
      aX.push(o.oCoords[prop].x)
      aY.push(o.oCoords[prop].y)
    }

    this._getBounds(aX, aY, onlyWidthHeight)
  },
})
const EraserBrush = fabric.util.createClass(fabric.PencilBrush, {
  /**
   * On mouseup after drawing the path on contextTop canvas
   * we use the points captured to create an new fabric path object
   * and add it to the fabric canvas.
   */
  _finalizeAndAddPath: function () {
    var ctx = this.canvas.contextTop
    ctx.closePath()
    if (this.decimate) {
      this._points = this.decimatePoints(this._points, this.decimate)
    }
    var pathData = this.convertPointsToSVGPath(this._points).join('')
    if (pathData === 'M 0 0 Q 0 0 0 0 L 0 0') {
      // do not create 0 width/height paths, as they are
      // rendered inconsistently across browsers
      // Firefox 4, for example, renders a dot,
      // whereas Chrome 10 renders nothing
      this.canvas.requestRenderAll()
      return
    }

    // use globalCompositeOperation to 'fake' eraser
    var path = this.createPath(pathData)
    path.globalCompositeOperation = 'destination-out'
    path.selectable = false
    path.evented = false
    path.absolutePositioned = true

    // grab all the objects that intersects with the path
    const objects = this.canvas.getObjects().filter((obj: any) => {
      // if (obj instanceof fabric.Textbox) return false;
      // if (obj instanceof fabric.IText) return false;
      if (!obj.intersectsWithObject(path)) return false
      return true
    })

    if (objects.length > 0) {
      // merge those objects into a group
      const mergedGroup = new fabric.Group(objects)
      const newPath = new ErasedGroup(mergedGroup, path)

      const left = newPath.left
      const top = newPath.top

      // convert it into a dataURL, then back to a fabric image
      const newData = newPath.toDataURL({
        withoutTransform: true,
      })
      fabric.Image.fromURL(newData, (fabricImage) => {
        fabricImage.set({
          left: left,
          top: top,
        })

        // remove the old objects then add the new image
        this.canvas.remove(...objects)
        this.canvas.add(fabricImage)
      })
    }

    this.canvas.clearContext(this.canvas.contextTop)
    this.canvas.renderAll()
    this._resetShadow()
  },
})

const UseFabric = (props: HTMLCanvasElement | null) => {
  return new fabric.Canvas(props, {
    height: 800,
    width: 1920,
    backgroundColor: 'red',
  })
}
const setBackground = (url: string, canvas: Canvas) => {
  fabric.Image.fromURL(url, (img) => {
    canvas.backgroundImage = img
    canvas.renderAll()
  })
}
const toggleMode = (mode: boolean, canvas: Canvas) => {
  if (mode) {
    canvas.isDrawingMode = false
    console.log('mode mouse')
    canvas.renderAll.bind(canvas)
  } else {
    canvas.isDrawingMode = true
    console.log('mode pen')
    canvas.renderAll.bind(canvas)
  }
}
const EraserMode = (canvas: Canvas) => {
  const eraserBrush = new EraserBrush(canvas)
  eraserBrush.width = 10
  eraserBrush.color = '#ffffff'
  canvas.freeDrawingBrush = eraserBrush
  console.log('mode eraser')
  canvas.renderAll.bind(canvas)
}
const PenMode = (canvas: Canvas) => {
  canvas.freeDrawingBrush.color = 'red'
  canvas.skipTargetFind = false
  canvas.selection = true
  console.log('mode mouse')
  canvas.freeDrawingBrush.width = 20
  canvas.renderAll.bind(canvas)
}
function App() {
  const refCanvas = useRef<HTMLCanvasElement | null>(null)
  const penRef = useRef<HTMLButtonElement | null>(null)
  const penRef2 = useRef<HTMLButtonElement | null>(null)
  const [color, setColor] = useState<Canvas>()

  useEffect(() => {
    const newFabric = UseFabric(refCanvas.current)
    setBackground(
      'https://e1.pxfuel.com/desktop-wallpaper/955/484/desktop-wallpaper-singer-singer-asian-asian-girl-kim-jenny-korean-singer-jennie-kim-section-%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0-jennie-the-show.jpg',
      newFabric
    )
    toggleMode(false, newFabric)
    penRef.current?.addEventListener('click', () => {
      EraserMode(newFabric)
    })
    penRef2.current?.addEventListener('click', () => {
      PenMode(newFabric)
    })
  }, [])

  return (
    <>
      <canvas ref={refCanvas} />
      <button ref={penRef}>pen</button>
      <button ref={penRef2}>eraser</button>
    </>
  )
}
export default App
