import styled, { css } from 'styled-components'
import tw from 'twin.macro'

import { SliderProps } from './slider.type'
import Transition from '../transition'

export const SliderWrapper = tw.div`relative flex h-[400px] w-[660px] items-center overflow-hidden rounded-lg`

export const SliderButtonArrow = styled.button(
  ({ position = 'right' }: SliderProps) => {
    const positions = {
      right: tw`right-4 top-1/2`,
      left: tw`left-4 top-1/2`,
    }
    return [
      position && positions[position],
      tw`absolute h-9 w-9 -translate-y-4 rounded-full bg-white/40 text-sm font-semibold backdrop-blur-2xl hover:bg-white`,
    ]
  }
)

export const SliderContent = styled.div(({ positionArrow }: SliderProps) => [
  tw`flex`,
  css`
    .enter {
      ${tw`transform transition ease-in-out duration-500`}
    }
    .enter-from {
      ${positionArrow
        ? tw`translate-x-96 opacity-0`
        : tw`-translate-x-96 opacity-0`}
    }
    .enter-to {
      ${tw`translate-x-0 opacity-100`}
    }
    .leave {
      ${tw`transform transition ease-in-out duration-500 `}
    }
    .leave-from {
      ${tw`translate-x-0 opacity-100`}
    }
    .leave-to {
      ${positionArrow
        ? tw`-translate-x-96 opacity-0`
        : tw`translate-x-96 opacity-0`}
    }
  `,
])
export const SliderMain = tw(Transition)`w-0`

export const SliderCardImage = tw.div`flex h-[400px] w-[660px] items-center justify-center`

export const SliderImage = tw.img`w-full h-full object-cover`

export const SliderWrapperDot = tw.div`absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white p-2`

export const SliderDot = styled.button(({ active = false }: SliderProps) => [
  active ? tw`w-4 bg-gray-600` : tw`w-2 bg-gray-200 hover:bg-gray-500`,
  tw`ease-in-out duration-200 h-2 rounded-full`,
])
