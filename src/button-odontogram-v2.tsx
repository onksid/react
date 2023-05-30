import tw, { styled } from 'twin.macro'

import { useState } from 'react'

const Wrapper = tw.div`relative h-12 w-12 overflow-hidden rounded-md outline outline-gray-500`
const Text = tw.div`text-primary-500 w-full text-center text-xs pt-1 font-bold rounded-sm`

type styledComponent = {
  isOpen: boolean
}
const Top = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-400` : tw`bg-white hover:bg-primary-300`,
  tw`h-6 w-12 border-b-[1.5px] border-gray-500`,
])
const Bottom = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-400` : tw`bg-white hover:bg-primary-300`,
  tw`h-6 w-12 -translate-y-1`,
])
const Left = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-300` : tw`bg-white hover:bg-primary-300`,
  tw`absolute -left-[180%] -top-[38%] h-24 w-24 rotate-[60deg] skew-x-[30deg] outline outline-gray-500`,
])

const Right = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`bg-primary-300` : tw`bg-white hover:bg-primary-300`,
  tw`absolute -right-[180%] -top-[65%] h-24 w-24 rotate-[-120deg] skew-x-[30deg] outline outline-gray-500`,
])

export default function ButtonOdontogramV2() {
  const [isOpenTop, setIsOpenTop] = useState(false)
  const [isOpenBottom, setIsOpenBottom] = useState(false)
  const [isOpenLeft, setIsOpenLeft] = useState(false)
  const [isOpenRight, setIsOpenRight] = useState(false)
  return (
    <div>
      <Text>12</Text>
      <Wrapper>
        <Top isOpen={isOpenTop} onClick={() => setIsOpenTop((e) => !e)} />
        <Bottom
          isOpen={isOpenBottom}
          onClick={() => setIsOpenBottom((e) => !e)}
        />
        <Left isOpen={isOpenLeft} onClick={() => setIsOpenLeft((e) => !e)} />
        <Right isOpen={isOpenRight} onClick={() => setIsOpenRight((e) => !e)} />
      </Wrapper>
    </div>
  )
}
