import tw, { styled } from 'twin.macro'

import { useState } from 'react'

const Content = tw.div`relative h-12 w-12 overflow-hidden rounded outline outline-gray-500`
const Text = tw.div`text-primary-500 w-full text-center text-xs pt-1 font-bold rounded-sm`
type styledComponent = {
  isOpen: boolean
}
const Top = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-300` : tw`bg-white hover:bg-primary-300`,
  tw`absolute -top-[0.6rem] z-10 h-12 w-12 -translate-y-1/2 rotate-45 outline outline-gray-500`,
])
const Bottom = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-300` : tw`bg-white hover:bg-primary-300`,
  tw`absolute -bottom-[0.6rem] z-10 h-12 w-12 translate-y-1/2 rotate-45 outline outline-gray-500`,
])
const Left = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-400` : tw`bg-white hover:bg-primary-300`,
  tw`absolute -bottom-[0.5rem] h-12 w-12 -translate-x-1/2 rotate-45 outline outline-gray-500`,
])

const Right = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-400` : tw`bg-white hover:bg-primary-300`,
  tw`absolute -bottom-[0.5rem] h-12 w-12 translate-x-1/2 rotate-45  outline outline-gray-500`,
])
const Middle = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-400` : tw`bg-white hover:bg-primary-300`,
  tw`absolute left-1/4 top-1/4 z-20 h-6 w-6 rounded-sm outline outline-gray-500`,
])

export default function ButtonOdontogramV1() {
  const [isOpenMiddle, setIsOpenMiddle] = useState(false)
  const [isOpenTop, setIsOpenTop] = useState(false)
  const [isOpenBottom, setIsOpenBottom] = useState(false)
  const [isOpenLeft, setIsOpenLeft] = useState(false)
  const [isOpenRight, setIsOpenRight] = useState(false)
  return (
    <div>
      <Text>18</Text>
      <Content>
        <Middle
          isOpen={isOpenMiddle}
          onClick={() => setIsOpenMiddle((e) => !e)}
        />
        <Top isOpen={isOpenTop} onClick={() => setIsOpenTop((e) => !e)} />
        <Bottom
          isOpen={isOpenBottom}
          onClick={() => setIsOpenBottom((e) => !e)}
        />
        <Left isOpen={isOpenLeft} onClick={() => setIsOpenLeft((e) => !e)} />
        <Right isOpen={isOpenRight} onClick={() => setIsOpenRight((e) => !e)} />
      </Content>
    </div>
  )
}
