import { ChangeEventHandler } from 'react'

type UploadProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>
}
export default function TakePhoto({ onChange }: UploadProps) {
  return (
    <label htmlFor="upload" tw="w-fit inline-flex">
      <div tw="min-w-[267px] cursor-pointer bg-white py-10 px-6 border border-dashed border-gray-200 rounded-lg hover:border-primary-500">
        <div tw="flex flex-col justify-center items-center gap-3">
          <div tw="rounded-full text-gray-600 w-10 p-2 bg-gray-100 outline outline-8 outline-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                clipPath="url(#a)"
              >
                <path d="M19.665 15.833A1.666 1.666 0 0 1 18 17.5h-15a1.667 1.667 0 0 1-1.667-1.667V6.667A1.667 1.667 0 0 1 2.999 5h3.333l1.667-2.5h5L14.665 5H18a1.667 1.667 0 0 1 1.666 1.667v9.166Z" />
                <path d="M10.499 14.167a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.5 0h20v20H.5z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div tw="w-full text-center">
            <div tw="text-sm font-semibold text-purple-700">Take Photo</div>
            <div tw="text-xs text-gray-400">
              Works only with certain devices
            </div>
          </div>
        </div>
      </div>
      <input
        id="upload"
        type="file"
        accept="image/*;capture=camera"
        onChange={onChange}
        hidden
      />
    </label>
  )
}
