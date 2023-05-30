import tw, { styled } from 'twin.macro'

import { useState } from 'react'

const Main = tw.div`font-sans w-fit`
const Wrapper = tw.div`h-fit w-fit rounded-md bg-gray-700 py-[1px]`
const Content = tw.div`relative m-[1.5px]`
type styledComponent = {
  isOpen: boolean
}
const Top = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-300` : tw`text-white hover:text-primary-300`,
  tw`absolute -top-[1.2px] left-[1.5px] w-[45px]`,
])
const Bottom = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-300` : tw`text-white hover:text-primary-300`,
  tw`absolute -bottom-[1.2px] left-[1px] w-[46px]`,
])
const Box = tw.div`flex w-fit gap-[0px]`
const Left = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-400` : tw`text-white hover:text-primary-300`,
  tw`w-3`,
])
const Middle = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-500` : tw`text-white hover:text-primary-300`,
  tw`m-auto w-[24px] h-[24px] `,
])
const Right = styled.button(({ isOpen }: styledComponent) => [
  isOpen ? tw`text-primary-400` : tw`text-white hover:text-primary-300`,
  tw`w-3`,
])

const Text = tw.div`w-full text-center text-sm font-semibold mt-1 rounded-md text-gray-500`
type ButtonVariant1Props = {
  text: string
  tralling?: boolean
}
export default function ButtonVariant1({
  text,
  tralling = false,
}: ButtonVariant1Props) {
  const [isOpenTop, setIsOpenTop] = useState(false)
  const [isOpenBottom, setIsOpenBottom] = useState(false)
  const [isOpenLeft, setIsOpenLeft] = useState(false)
  const [isOpenMiddle, setIsOpenMiddle] = useState(false)
  const [isOpenRight, setIsOpenRight] = useState(false)
  return (
    <Main>
      {!tralling && <Text>{text}</Text>}
      <Wrapper>
        <Content>
          <Top isOpen={isOpenTop} onClick={() => setIsOpenTop(!isOpenTop)}>
            <svg fill="currentColor" viewBox="0 0 34 9">
              <path d="m.547.84 7.437 7.437A1.99 1.99 0 0 1 9 8h16c.37 0 .718.101 1.016.277L33.453.84A3.982 3.982 0 0 0 31 0H3C2.075 0 1.224.314.547.84Z" />
            </svg>
          </Top>
          <Box>
            <Left
              isOpen={isOpenLeft}
              onClick={() => setIsOpenLeft(!isOpenLeft)}
            >
              <svg fill="currentColor" viewBox="0 0 9 34">
                <path d="M.84.547A3.983 3.983 0 0 0 0 3v28c0 .924.314 1.775.84 2.453l7.437-7.437A1.99 1.99 0 0 1 8 25V9c0-.371.101-.719.277-1.016L.84.547Z" />
              </svg>
            </Left>
            <Middle
              isOpen={isOpenMiddle}
              onClick={() => setIsOpenMiddle(!isOpenMiddle)}
            >
              <svg fill="currentColor" viewBox="0 0 18 18">
                <path d="M1 0h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1Z" />
              </svg>
            </Middle>
            <Right
              isOpen={isOpenRight}
              onClick={() => setIsOpenRight(!isOpenRight)}
            >
              <svg fill="currentColor" viewBox="0 0 9 34">
                <path d="M8.16.547.722 7.984C.899 8.28 1 8.629 1 9v16c0 .37-.101.718-.277 1.016l7.436 7.437C8.686 32.775 9 31.924 9 31V3c0-.925-.313-1.776-.84-2.453Z" />
              </svg>
            </Right>
          </Box>
          <Bottom
            isOpen={isOpenBottom}
            onClick={() => setIsOpenBottom(!isOpenBottom)}
          >
            <svg fill="currentColor" viewBox="0 0 34 9">
              <path d="M33.453 8.16 26.015.722A1.99 1.99 0 0 1 25 1H9A1.99 1.99 0 0 1 7.984.723L.547 8.159C1.224 8.686 2.075 9 3 9h28c.924 0 1.775-.313 2.453-.84Z" />
            </svg>
          </Bottom>
        </Content>
      </Wrapper>
      {tralling && <Text>{text}</Text>}
    </Main>
  )
}
