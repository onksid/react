import tw from 'twin.macro'

import { MouseEventHandler } from 'react'

export const MainButtonIcon = tw.button`h-10 w-10 rounded-lg border border-gray-200 p-2.5 text-gray-500 disabled:text-gray-200`

type ButtonIconProps = {
  icon?: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  disable?: boolean
}
export default function ButtonIcon({
  icon,
  onClick,
  disable = false,
}: ButtonIconProps) {
  return (
    <MainButtonIcon onClick={onClick} disabled={disable}>
      {icon}
    </MainButtonIcon>
  )
}
