import tw, { styled } from 'twin.macro'

import { useEffect, useRef, useState } from 'react'
import { createPortal, findDOMNode } from 'react-dom'

import usePortal from './whiteboard/hooks/portal'
import Whiteboard from './whiteboard/white-board'

type TestProps = {
  active?: boolean | undefined
}

const Test = styled.button(({ active = false }: TestProps) => [
  !active ? tw`scale-75 opacity-0` : tw`bg-yellow-500 scale-100 opacity-100`,
  tw`ease-in-out duration-500`,
])

function App() {
  const [x, setX] = useState<boolean | undefined>()
  const [value, setvalue] = useState<boolean | undefined>()
  const [valueCss, setvalueCss] = useState<boolean | undefined>()
  const cobaelement = useRef<HTMLDivElement | null>(null)
  const { isAnimation, isOpen, isClick, isOpenProtal, isClosePortal } =
    usePortal(cobaelement, 300)

  return (
    <div>
      <div id="onk">
        <button onClick={isOpenProtal}>true</button>
        <button onClick={isClosePortal}>false</button>
        {isOpen && (
          <div ref={cobaelement}>
            <CobaCOmponent isAnimation={isAnimation} />
          </div>
        )}
      </div>
      <Whiteboard />
    </div>
  )
}
export default App
type CobaCOmponentProps = {
  isAnimation: boolean | undefined
}
const CobaCOmponent = ({ isAnimation = false }: CobaCOmponentProps) => {
  return createPortal(
    <Test active={isAnimation}>portal</Test>,
    document.getElementById('onk')!
  )
}
