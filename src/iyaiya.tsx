import tw, { styled } from 'twin.macro'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const ImageData = [
  'https://kpopping.com/documents/65/0/2726/Kim-Sejeong-for-ROEM-2022-SS-Collection-documents-1.jpeg?v=c0f92',
  'https://lh3.googleusercontent.com/eLHVt46pp6DGOM0YtNGoBiCl68Tkmlla4PF_XFdMrkcsbQneOPPt4Dymm2ZoR6dqzrIcDZ7WTVhshPS3BgqozIPBXTAiw4GbVePzheWodtRn13Y=w960-rj-nu-e365',
  'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/06/15/ad978bce-3983-49fa-94be-4c90c7abd33c_1bbcde61.jpg?itok=ZPOjwBLW&v=1655262423',
  'https://asset-a.grid.id/crop/0x27:999x681/945x630/photo/2023/02/08/1675672109-imagejpg-20230208104742.jpg',
  'https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/24/2022/04/in-sejeong-1.jpg',
  'https://assets.ayobandung.com/crop/0x26:1125x827/750x500/webp/photo/2022/11/05/1821522930.jpg',
]

type WrapperImageProps = {
  isActive?: boolean
}
const WrapperImage = styled.div(({ isActive }: WrapperImageProps) => [
  !isActive ? tw`` : tw``,
  tw`h-[400px] w-[660px] ease-in-out duration-500 overflow-hidden rounded-lg`,
])
function App() {
  const isRef = useRef<HTMLDivElement | null>(null)
  const refImage = useRef<HTMLImageElement | null>(null)
  const refWdah = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (refWdah.current) {
      refWdah.current.clientWidth
      console.log(refWdah.current.style.gap)
    }
  })
  const [state, setState] = useState(0)
  const [view, setView] = useState(false)
  const [data] = useState(ImageData.length)

  const rows = []
  for (let i = 0; i < data; i++) {
    if (i === state) {
      rows.push(
        <div key={i} data-dots={i + 1} tw="w-4 h-2 rounded-full bg-gray-600" />
      )
    } else {
      rows.push(
        <div
          onClick={() => setState(i)}
          key={i}
          data-dots={i + 1}
          tw="w-2 h-2 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-500"
        />
      )
    }
  }

  return (
    <div tw="m-auto container flex gap-3 justify-center items-center h-screen">
      <div tw="overflow-scroll w-[660px] overflow-x-hidden rounded-lg">
        <div
          ref={refWdah}
          tw="flex gap-2 relative w-fit -translate-x-[1328px] h-fit"
        >
          {state !== data - 1 && (
            <button
              onClick={() => setState(state + 1)}
              tw="rounded-full bg-white h-8 w-8 -translate-y-4 z-10 text-sm font-semibold absolute right-4 top-1/2"
            >
              R
            </button>
          )}
          {state >= 1 && (
            <button
              onClick={() => setState(state - 1)}
              tw="rounded-full bg-white h-8 w-8 -translate-y-4 z-10 text-sm font-semibold absolute left-4 top-1/2"
            >
              L
            </button>
          )}
          {ImageData.map((item, index) => (
            <WrapperImage
              key={item}
              isActive={index !== state}
              ref={isRef}
              data-image={index + 1}
            >
              <img ref={refImage} tw="w-full h-full object-cover" src={item} />
            </WrapperImage>
          ))}
          <div tw="absolute bottom-4 left-1/2 bg-white p-2 rounded-full -translate-x-1/2 flex gap-2">
            {rows}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
