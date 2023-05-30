import { SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import useClickAnyWay from '../../hooks/custom/use-click-anyway'
import { BrushContext } from '../../store/brush-context'
import ButtonWhiteBoard from '../button'
import { IconPen } from '../icon/svg/pen'
import {
  ContentModalPen,
  InputPen,
  WrapperInputPen,
  WrapperModalPen,
  WrapperPen,
  WrapperSizePen,
} from './pen.style'

type PenProps = {
  isActive?: string
  setBrushType: (value: string) => void
  setIsDraw: (value: SetStateAction<boolean>) => void | undefined
  setIsActive: (value: SetStateAction<string>) => void | undefined
}

export default function Pen({
  isActive,
  setIsDraw,
  setIsActive,
  setBrushType,
}: PenProps) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const { state, onClick } = useClickAnyWay(modalRef)

  const [color, setColor] = useState('#aabbcc')
  const [active, setActive] = useState('S')
  const [size, setSize] = useState(5)

  const brushContext = useContext(BrushContext)

  const brush = brushContext.brush

  useEffect(() => {
    brushContext.setBrush({
      type: brush.type,
      color: color,
      width: size,
    })
  }, [color, size])

  // onclick button pen
  const onClickPen = () => {
    setIsDraw(true)
    setBrushType('PENCIL')
    setIsActive('pen')
    onClick()
  }

  // on input change color pen
  const onChangeColor = (e: any) => {
    setColor(e.target.value.toLocaleLowerCase())
  }

  return (
    <WrapperPen ref={modalRef}>
      <ButtonWhiteBoard id="pen" active={isActive} onClick={onClickPen}>
        <IconPen />
      </ButtonWhiteBoard>
      <WrapperModalPen isActive={state}>
        <ContentModalPen>
          <HexColorPicker color={color} onChange={setColor} />
          <WrapperInputPen>
            <InputPen
              placeholder="#code-color"
              value={color}
              onChange={onChangeColor}
            />
            <InputPen
              width="2/5"
              placeholder="size"
              onChange={(e) => setSize(+e.target.value)}
            />
          </WrapperInputPen>
          <WrapperSizePen>
            <ButtonWhiteBoard
              id="S"
              active={active}
              onClick={() => {
                setSize(5)
                setActive('S')
              }}
            >
              S
            </ButtonWhiteBoard>
            <ButtonWhiteBoard
              id="M"
              active={active}
              onClick={() => {
                setSize(10)
                setActive('M')
              }}
            >
              M
            </ButtonWhiteBoard>
            <ButtonWhiteBoard
              id="L"
              active={active}
              onClick={() => {
                setSize(15)
                setActive('L')
              }}
            >
              L
            </ButtonWhiteBoard>
            <ButtonWhiteBoard
              id="XL"
              active={active}
              onClick={() => {
                setSize(25)
                setActive('XL')
              }}
            >
              XL
            </ButtonWhiteBoard>
          </WrapperSizePen>
        </ContentModalPen>
      </WrapperModalPen>
    </WrapperPen>
  )
}
