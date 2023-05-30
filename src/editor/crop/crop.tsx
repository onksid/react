import { useState } from 'react'
import ReactCrop, {
  Crop,
  PixelCrop,
  centerCrop,
  makeAspectCrop,
} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

type CropProps = {
  setCompletedCrop?: any
  crop?: Crop
  setCrop?: any
  imageRef?: any
  imageSrc?: string
  onImageLoad?: any
  setCanvasRef?: any
  width?: number
  height?: number
}
export default function CropCanvas({
  crop,
  setCrop,
  setCompletedCrop,
  imageRef,
  imageSrc,
  onImageLoad,
  setCanvasRef,
  width,
  height,
}: CropProps) {
  return (
    <>
      {!!imageSrc && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={undefined}
        >
          <img
            ref={imageRef}
            alt="Crop me"
            src={imageSrc}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      <canvas
        ref={setCanvasRef}
        tw="hidden"
        style={{
          objectFit: 'contain',
          width: width,
          height: height,
        }}
      />
    </>
  )
}
