import { useState } from 'react'

import {
  SliderButtonArrow,
  SliderCardImage,
  SliderContent,
  SliderDot,
  SliderImage,
  SliderMain,
  SliderWrapper,
  SliderWrapperDot,
} from './slider.style'

export default function Slider() {
  let [isShowing, setIsShowing] = useState(0)

  let [position, setPosition] = useState('right')

  const [data] = useState(ImageData.length)

  const isPrev = isShowing >= 1

  const onPrev = () => {
    setIsShowing(isShowing - 1)
    setPosition('left')
  }

  const isNext = isShowing !== data - 1

  const onNext = () => {
    setIsShowing(isShowing + 1)
    setPosition('right')
  }

  const rows = []

  for (let i = 0; i < data; i++) {
    rows.push(
      <SliderDot
        onClick={() => setIsShowing(i)}
        active={i === isShowing}
        key={i}
        data-dots={i + 1}
      />
    )
  }
  return (
    <SliderWrapper>
      <SliderContent positionArrow={position === 'right'}>
        {ImageData.map((item, index) => (
          <SliderMain
            appear={false}
            unmount={false}
            key={index}
            show={isShowing === index}
          >
            <SliderCardImage>
              <SliderImage src={item} alt="slider" />
            </SliderCardImage>
          </SliderMain>
        ))}
      </SliderContent>
      {isNext && <SliderButtonArrow onClick={onNext}>R</SliderButtonArrow>}
      {isPrev && (
        <SliderButtonArrow position="left" onClick={onPrev}>
          L
        </SliderButtonArrow>
      )}

      <SliderWrapperDot>{rows}</SliderWrapperDot>
    </SliderWrapper>
  )
}

export const ImageData = [
  'https://kpopping.com/documents/65/0/2726/Kim-Sejeong-for-ROEM-2022-SS-Collection-documents-1.jpeg?v=c0f92',
  'https://lh3.googleusercontent.com/eLHVt46pp6DGOM0YtNGoBiCl68Tkmlla4PF_XFdMrkcsbQneOPPt4Dymm2ZoR6dqzrIcDZ7WTVhshPS3BgqozIPBXTAiw4GbVePzheWodtRn13Y=w960-rj-nu-e365',
  'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/06/15/ad978bce-3983-49fa-94be-4c90c7abd33c_1bbcde61.jpg?itok=ZPOjwBLW&v=1655262423',
  'https://asset-a.grid.id/crop/0x27:999x681/945x630/photo/2023/02/08/1675672109-imagejpg-20230208104742.jpg',
  'https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/24/2022/04/in-sejeong-1.jpg',
  'https://assets.ayobandung.com/crop/0x26:1125x827/750x500/webp/photo/2022/11/05/1821522930.jpg',
]
