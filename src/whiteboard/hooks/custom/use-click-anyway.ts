import { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'

function useClickAnyWay<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  value?: boolean
) {
  const [state, setState] = useState<boolean>((value = false))
  useEffect(() => {
    const listener = <T extends Event = Event>(event: T) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      setState(false)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, setState])

  const onClick = () => {
    setState(true)
  }
  const onClickInside = () => {
    setState(false)
  }
  return { state, onClick, onClickInside }
}
export default useClickAnyWay
