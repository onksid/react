import { useCallback, useState } from 'react'
import { Crop } from 'react-image-crop'

import CenterAspectCrop from './center-aspect-crop'

function useSelectFile() {
  const [crop, setCrop] = useState<Crop>()

  const [imgSrc, setImgSrc] = useState('')

  const SelectFile = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      if (e?.target.files && e?.target.files.length > 0) {
        setCrop(undefined)

        const reader = new FileReader()

        reader.addEventListener('load', () =>
          setImgSrc(reader.result?.toString() || '')
        )

        reader.readAsDataURL(e.target.files[0])
      }
    },
    [setCrop, setImgSrc]
  )

  const ImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const { width, height } = e.currentTarget
      setCrop(CenterAspectCrop(width, height, 16 / 9))
    },
    [setCrop]
  )
  return { setCrop, imgSrc, crop, SelectFile, ImageLoad }
}
export default useSelectFile
