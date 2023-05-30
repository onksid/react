import tw, { styled } from 'twin.macro'

import { useState } from 'react'

type WrapperProps = {
  isActive?: boolean
}
export const Wrapper = styled.button(({ isActive }: WrapperProps) => [
  isActive
    ? tw`bg-primary-600 text-white`
    : tw`border border-gray-200 text-gray-500 hover:(border-primary-500)`,
  tw`h-10 w-10 rounded-lg p-2 focus:(border-primary-500)`,
])
type ButtonProps = {
  active?: string
  onClick?: any
  id?: string
} & React.PropsWithChildren
export default function Button({
  active = '',
  onClick,
  id,
  children,
}: ButtonProps) {
  return (
    <Wrapper id={id} isActive={active === id} onClick={onClick}>
      {children}
    </Wrapper>
  )
}
