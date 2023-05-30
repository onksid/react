import { SetStateAction } from 'react'

import ButtonWhiteBoard from '../button'
import { IconEraser } from '../icon/svg/eraser'

type EraserProps = {
  isActive?: string
  setBrushType: (value: string) => void
  setIsDraw: (value: SetStateAction<boolean>) => void | undefined
  setIsActive: (value: SetStateAction<string>) => void | undefined
}

function Eraser({
  isActive,
  setIsDraw,
  setIsActive,
  setBrushType,
}: EraserProps) {
  const onClickEraser = () => {
    setIsDraw(true)
    setIsActive('eraser')
    setBrushType('ERASER')
  }

  return (
    <ButtonWhiteBoard id="eraser" active={isActive} onClick={onClickEraser}>
      <IconEraser />
    </ButtonWhiteBoard>
  )
}
export default Eraser
