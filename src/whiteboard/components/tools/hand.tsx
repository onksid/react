import { SetStateAction } from 'react'

import ButtonWhiteBoard from '../button'
import { IconHand } from '../icon/svg/hand'

type HandProps = {
  isActive?: string
  setIsDraw: (value: SetStateAction<boolean>) => void | undefined
  setIsActive: (value: SetStateAction<string>) => void | undefined
}
export default function Hand({ isActive, setIsDraw, setIsActive }: HandProps) {
  return (
    <ButtonWhiteBoard
      id="hand"
      active={isActive}
      onClick={() => {
        setIsDraw(false)
        setIsActive('hand')
      }}
    >
      <IconHand />
    </ButtonWhiteBoard>
  )
}
