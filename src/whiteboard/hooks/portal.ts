import { useEffect, useMemo, useState } from 'react'

export default function usePortal(refElement: any, transitionDuration: number) {
  const [isClick, setIsClick] = useState<boolean>()

  const [isOpen, setIsopen] = useState<boolean>()

  const [isAnimation, setIsAnimation] = useState<boolean>()
  // get create classname
  const createElement = (element: Element | SVGElement, className: string) => {
    if (element.classList) element.classList.add(className)
  }

  // get classname
  const getElement = (element: Element | SVGElement) => {
    if (element.classList) return element.classList.value
  }

  // remove classname
  const removeElement = (element: Element | SVGElement, className: string) => {
    if (element.classList) element.classList.remove(className)
  }

  useEffect(() => {
    if (!refElement.current) return

    if (isClick === true) {
      setIsopen(true)
      // is animation create
      createElement(refElement.current, 'base')
      if (getElement(refElement.current) === 'base') {
        createElement(refElement.current, 'active')
        removeElement(refElement.current, 'base')
      }
      //is animation running
      if (getElement(refElement.current) === 'active') {
        createElement(refElement.current, 'done')
        removeElement(refElement.current, 'active')
        setIsAnimation(true)
      }
    }

    if (isClick === false) {
      removeElement(refElement.current, 'done')
      createElement(refElement.current, 'active')
      // is animation running
      if (getElement(refElement.current) === 'active') {
        createElement(refElement.current, 'base')
        removeElement(refElement.current, 'active')
        setIsAnimation(false)

        // is animation stop
        if (isClick === false) {
          removeElement(refElement.current, 'base')
          // duration transition
          const timer = setTimeout(() => {
            setIsopen(false)
          }, transitionDuration)
          return () => clearTimeout(timer)
        }
      }
    }
  }, [isClick])

  const isOpenProtal = () => {
    setIsClick(true)
    setIsopen(true)
  }

  const isClosePortal = () => {
    setIsClick(false)
  }
  return { isAnimation, isOpen, isClick, isOpenProtal, isClosePortal }
}
