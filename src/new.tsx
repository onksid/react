import { Renderer } from '@tldraw/core'

import { useCallback, useRef, useState } from 'react'
import React from 'react'
import 'react-image-crop/dist/ReactCrop.css'

import Example from './coba'
import ButtonIcon from './editor/components/button-icon'
import { IconCrop } from './editor/components/svg/crop'
import { IconPen } from './editor/components/svg/pen'
import { IconPlus } from './editor/components/svg/plus'
import CropCanvas from './editor/crop/crop'
import Draw from './editor/crop/draw'
import useCrop from './editor/hooks/use-crop'
import UseCropEffect from './editor/hooks/use-crop-effect'
import useSelectFile from './editor/hooks/use-select-file'
import useZoom from './editor/hooks/use-zoom'
import TakePhoto from './editor/upload/take-photo'
import Upload from './editor/upload/upload'

export default function New() {
  const ref = useRef(null)

  const { completedCrop, imgRef, setCanvasRef, setCompletedCrop } =
    UseCropEffect()

  const { Crop, newCrop } = useCrop()

  const { setCrop, imgSrc, crop, SelectFile, ImageLoad } = useSelectFile()

  const { icrement, decrement, disableButtonMin, disableButtonPlus, zoom } =
    useZoom()
  // <div tw="absolute left-0 right-0 top-0 bottom-0 bg-white/80" />
  type HemProps = {
    dataJiso?: string
    dataKarina?: string
  }
  const [gas, setGas] = useState<HemProps>({})
  const [getData, setGetData] = useState<string>('jiso')
  const [getData1, setGetData1] = useState(gas.dataJiso)
  console.log('karinna')

  return (
    <div tw="bg-gray-100 flex">
      <div tw="min-w-[248px] bg-white">hello</div>
      <div tw="relative h-screen overflow-scroll">
        {!imgSrc && (
          <div tw="w-[calc(100vw-248px)] h-[calc(100vh-72px)] flex justify-center items-center">
            <div tw="flex gap-5">
              <Upload onChange={(e) => SelectFile(e)} />
              <TakePhoto />
            </div>
          </div>
        )}
        {!newCrop && (
          <CropCanvas
            crop={crop}
            setCrop={setCrop}
            setCompletedCrop={setCompletedCrop}
            imageRef={imgRef}
            imageSrc={imgSrc}
            onImageLoad={ImageLoad}
            setCanvasRef={setCanvasRef}
            width={completedCrop?.width}
            height={completedCrop?.height}
          />
        )}
        {newCrop && <Draw scale={zoom} imgSrc={newCrop} refCanvas={ref} />}
        <div ref={ref} tw="absolute bottom-0 left-0 right-0">
          <div tw="ml-6 flex gap-2 my-4">
            <button
              onClick={() => setGetData('jiso')}
              tw="h-10 w-10 rounded-lg overflow-hidden"
            >
              <img
                tw="w-full h-full object-cover"
                src="https://e1.pxfuel.com/desktop-wallpaper/543/554/desktop-wallpaper-karina-aespa-savage-pc.jpg"
                alt="karina"
              />
            </button>
            <button
              onClick={() => setGetData('karina')}
              tw="h-10 w-10 rounded-lg overflow-hidden"
            >
              <img
                tw="w-full h-full object-cover"
                src="https://i.pinimg.com/originals/72/59/49/72594907cf3c981d9c8b56cb037ab109.jpg"
                alt="Jiso"
              />
            </button>
          </div>
          <div tw="bg-white h-[72px] w-full py-4 px-6 flex gap-2">
            <ButtonIcon icon={IconPen} />
            <ButtonIcon onClick={() => Crop(setCanvasRef)} icon={IconCrop} />
            <div tw="flex justify-center">
              <ButtonIcon
                onClick={decrement}
                icon={IconPlus}
                disable={disableButtonMin}
              />
              <div tw="w-[72px] text-sm font-semibold text-gray-700 flex justify-center items-center">
                {zoom}%
              </div>
              <ButtonIcon
                onClick={icrement}
                icon={IconPlus}
                disable={disableButtonPlus}
              />
              <ButtonIcon
                onClick={() => setGetData1(gas.dataKarina)}
                icon={IconPlus}
                disable={disableButtonPlus}
              />
              <ButtonIcon
                onClick={() => setGetData1(gas.dataJiso)}
                icon={IconPlus}
                disable={disableButtonPlus}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
