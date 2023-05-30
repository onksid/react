import tw, { styled } from 'twin.macro'

export const WrapperPen = tw.div`relative h-10`

type WrapperModalPenProps = {
  isActive?: boolean
}

export const WrapperModalPen = styled.div(
  ({ isActive = false }: WrapperModalPenProps) => [
    !isActive
      ? tw`translate-y-36 -z-10 opacity-0 invisible`
      : tw`translate-y-0 z-30 visible opacity-100`,
    tw`ease-in-out duration-150 relative`,
  ]
)
export const ContentModalPen = tw.div`absolute -translate-x-12 bottom-0 -translate-y-16 rounded-xl bg-white p-3`

export const WrapperInputPen = tw.div`mt-3 flex w-full items-center gap-2`

type InputPenProps = {
  width?: '3/5' | '2/5'
}

export const InputPen = styled.input(({ width = '3/5' }: InputPenProps) => {
  const widths = {
    '3/5': tw`w-3/5`,
    '2/5': tw`w-2/5`,
  }

  return [
    widths[width],
    tw`focus:(outline-none border-primary-500) h-10 rounded-lg border border-gray-200 px-3 text-sm`,
  ]
})

export const WrapperSizePen = tw.div`mt-3 flex w-full items-center justify-between gap-2`
