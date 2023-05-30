import { ChangeEventHandler } from 'react'

type UploadProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>
}
export default function Upload({ onChange }: UploadProps) {
  return (
    <label htmlFor="upload" tw="inline-flex">
      <div tw="min-w-[267px] cursor-pointer bg-white py-10 px-6 border border-dashed border-gray-200 rounded-lg hover:border-primary-500">
        <div tw="flex flex-col justify-center items-center gap-3">
          <div tw="rounded-full text-gray-600 w-10 p-2 bg-gray-100 outline outline-8 outline-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g clipPath="url(#a)">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.667"
                  d="M13.833 13.333 10.499 10m0 0-3.333 3.333M10.499 10v7.5m6.992-2.175A4.167 4.167 0 0 0 15.499 7.5h-1.05A6.666 6.666 0 1 0 3 13.583"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.5 0h20v20H.5z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div tw="w-full text-center">
            <div tw="text-sm text-gray-500">
              <span tw="font-semibold text-purple-700 pr-1">upload</span>or drag
              and drop
            </div>
            <div tw="text-xs text-gray-400">
              Supported format: JPG, JPEG, PNG, GIF
            </div>
          </div>
        </div>
      </div>
      <input
        id="upload"
        type="file"
        accept="image/x-png,image/jpg,image/jpeg"
        onChange={onChange}
        hidden
      />
    </label>
  )
}
