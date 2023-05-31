import Dropdown from './headlessui/dropdown/dropdown'
import Slider from './headlessui/slider/slider'

function App() {
  return (
    <div>
      <div tw="flex flex-col m-auto bg-red-900 h-screen justify-center items-center">
        <Dropdown
          items={[
            [
              { label: 'Edit', onClick: () => {} },
              { label: 'Duplicate', onClick: () => {} },
            ],
            [
              { label: 'Archive', onClick: () => {} },
              { label: 'Move', onClick: () => {} },
            ],
            [{ label: 'Delete', onClick: () => {} }],
          ]}
        >
          select
        </Dropdown>
      </div>
      <div tw="flex flex-col bg-gray-900 m-auto h-screen justify-center items-center">
        <Slider />
      </div>
    </div>
  )
}
export default App
