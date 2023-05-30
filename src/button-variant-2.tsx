import tw, { styled } from 'twin.macro'

import { useState } from 'react'

const Main = tw.div`font-sans w-fit`
const Wrapper = tw.div`h-fit w-fit rounded-md bg-gray-700 py-[1px]`
const Content = tw.div`my-[0.5px] mx-[3px] grid`
type styledComponent = {
  isOpen: boolean
}
const Top = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-300` : tw`text-white hover:text-primary-300`,
  tw`w-[45px]`,
])
const Bottom = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-300` : tw`text-white hover:text-primary-300`,
  tw`w-[45px]`,
])
const Box = tw.div`w-full relative flex justify-between`
const Left = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-400` : tw`text-white hover:text-primary-300`,
  tw`absolute -left-[1.6px] -top-[0.5px] -translate-y-1/2 w-4`,
])
const Right = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-400` : tw`text-white hover:text-primary-300`,
  tw`absolute -right-[1.5px] -translate-y-1/2 w-4`,
])

const Text = tw.div`w-full text-center text-sm font-semibold mt-1 rounded-md text-gray-500`
type ButtonVariant2Props = {
  text: string
  tralling?: boolean
}

export default function ButtonVariant2({
  text,
  tralling = false,
}: ButtonVariant2Props) {
  const [isOpenTop, setIsOpenTop] = useState(false)
  const [isOpenBottom, setIsOpenBottom] = useState(false)
  const [isOpenLeft, setIsOpenLeft] = useState(false)
  const [isOpenRight, setIsOpenRight] = useState(false)
  return (
    <Main>
      {!tralling && <Text>{text}</Text>}
      <Wrapper>
        <Content>
          <Top isOpen={isOpenTop} onClick={() => setIsOpenTop(!isOpenTop)}>
            <svg fill="currentColor" viewBox="0 0 34 18">
              <path d="m.436.93 10.44 16.206h11.66L33.386.79A3.982 3.982 0 0 0 31 0H3C2.024 0 1.13.35.436.93Z" />
            </svg>
          </Top>
          <Box>
            <Left
              isOpen={isOpenLeft}
              onClick={() => setIsOpenLeft(!isOpenLeft)}
            >
              <svg fill="currentColor" viewBox="0 0 12 33">
                <path d="M.734.688A3.982 3.982 0 0 0 0 2.998v28c0 .705.182 1.368.503 1.943l10.506-16.307L.734.687Z" />
              </svg>
            </Left>
            <Right
              isOpen={isOpenRight}
              onClick={() => setIsOpenRight(!isOpenRight)}
            >
              <svg fill="currentColor" viewBox="0 0 12 34">
                <path d="M11.114.496.396 16.642l10.8 16.76c.502-.668.8-1.5.8-2.4v-28c0-.949-.33-1.82-.882-2.506Z" />
              </svg>
            </Right>
          </Box>
          <Bottom
            isOpen={isOpenBottom}
            onClick={() => setIsOpenBottom(!isOpenBottom)}
          >
            <svg fill="currentColor" viewBox="0 0 34 18">
              <path d="M33.483 17.136 22.53.136H10.875L.142 16.799a3.988 3.988 0 0 0 2.858 1.203h28c.939 0 1.802-.324 2.484-.865Z" />
            </svg>
          </Bottom>
        </Content>
      </Wrapper>
      {tralling && <Text>{text}</Text>}
    </Main>
  )
}
