export default function Sidebar() {
  return (
    <div tw="w-80 border-r flex h-screen border-gray-200">
      <div tw="w-[72px] border-r text-center justify-center flex flex-col border-gray-200 h-full">
        ON
      </div>
      <div tw="w-[calc(100%-72px)]">
        <div tw="h-[78px] border-b border-gray-200 w-full"></div>
        <div tw="px-4 pt-9">
          <div tw="flex flex-col gap-4">
            <div tw="text-sm font-bold text-gray-700">Profil Photo</div>
            <div tw="flex gap-2 justify-between">
              <button tw="text-xs w-full rounded-lg py-[7px] px-3.5 border border-gray-200">
                Profil Photo
              </button>
              <button tw="text-xs w-full rounded-lg min-w-fit py-[7px] px-3.5 border border-gray-200">
                Loteral Photo
              </button>
            </div>
          </div>
        </div>
        <div tw="px-4 pt-9">
          <div tw="flex flex-col gap-4">
            <div tw="text-sm font-bold text-gray-700">Intra Oral</div>
            <div tw="flex flex-col gap-2">
              <button tw="text-xs w-full rounded-lg py-[7px] px-3.5 border border-gray-200">
                Front
              </button>
              <div tw="flex gap-2 justify-between">
                <button tw="text-xs w-full rounded-lg py-[7px] px-3.5 border border-gray-200">
                  Left
                </button>
                <button tw="text-xs w-full rounded-lg min-w-fit py-[7px] px-3.5 border border-gray-200">
                  Right
                </button>
              </div>
              <div tw="flex gap-2 justify-between">
                <button tw="text-xs w-full rounded-lg py-[7px] px-3.5 border border-gray-200">
                  Upper
                </button>
                <button tw="text-xs w-full rounded-lg min-w-fit py-[7px] px-3.5 border border-gray-200">
                  Lower
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
