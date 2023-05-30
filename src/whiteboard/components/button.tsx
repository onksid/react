import tw, { styled } from 'twin.macro'

import { MouseEventHandler } from 'react'

type ButtonWhiteBoardProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  id?: string
  active?: string
  rounded?: 'left' | 'right' | 'none'
  disable?: boolean
} & React.PropsWithChildren

type ButtonWhiteBoardWrapperProps = {
  isActive?: boolean
  rounded?: 'left' | 'right' | 'none'
}
export const ButtonWhiteBoardWrapper = styled.button(
  ({ isActive, rounded = 'none' }: ButtonWhiteBoardWrapperProps) => {
    const roundeds = {
      left: tw`rounded-l-lg`,
      right: tw`rounded-r-lg`,
      none: tw`rounded-lg`,
    }
    return [
      isActive
        ? tw`bg-primary-600 text-white`
        : tw`border border-gray-200 text-gray-500 hover:(border-primary-500)`,
      roundeds[rounded],
      tw`h-10 w-10 p-2 focus:(border-primary-500) disabled:(text-gray-200 border-gray-100)`,
    ]
  }
)
export default function ButtonWhiteBoard({
  onClick,
  id,
  active,
  rounded,
  disable = false,
  children,
}: ButtonWhiteBoardProps) {
  return (
    <ButtonWhiteBoardWrapper
      disabled={disable}
      rounded={rounded}
      id={id}
      isActive={active === id}
      onClick={onClick}
    >
      {children}
    </ButtonWhiteBoardWrapper>
  )
}
