import tw, { css, styled } from 'twin.macro'

import { Menu } from '@headlessui/react'
import { useState } from 'react'

import Transition from '../transition'

type DropdownItems = {
  label: string
  onClick: () => void
}

type MenuItemProps = { disabled?: boolean }

type DropdownProps = {
  items: DropdownItems[][]
  menuProps?: { as?: React.ElementType }
  menuItemsProps?: {
    static?: boolean
    unmount?: undefined
  }
  menuItemProps?: MenuItemProps
  children: React.ReactNode
}
export default function Dropdown({
  items,
  menuItemsProps,
  menuItemProps,
  children,
}: DropdownProps) {
  let [isShowing, setIsShowing] = useState(false)

  return (
    <Menu tw="relative inline-block text-left">
      <div>
        <div>
          <Label>{children}</Label>
        </div>
        <DropdownContent>
          <Transition>
            <Menu.Items
              tw="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              {...menuItemsProps}
            >
              {items.map((group, index) => (
                <ItemGroup
                  key={index}
                  group={group}
                  menuItemProps={menuItemProps}
                />
              ))}
            </Menu.Items>
          </Transition>
        </DropdownContent>
      </div>
    </Menu>
  )
}

export const DropdownContent = styled.div(() => [
  css`
    .enter {
      ${tw`transition ease-out duration-100`}
    }
    .enter-from {
      ${tw`transform opacity-0 scale-95`}
    }
    .enter-to {
      ${tw`transform opacity-100 scale-100`}
    }
    .leave {
      ${tw`transition ease-in duration-75`}
    }
    .leave-from {
      ${tw`transform opacity-100 scale-100`}
    }
    .leave-to {
      ${tw`transform opacity-0 scale-95`}
    }
  `,
])

type LabelProps = {
  children: React.ReactNode
}

function Label({ children }: LabelProps) {
  return (
    <Menu.Button tw="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75)">
      {children}
    </Menu.Button>
  )
}

function ItemGroup({
  group,
  menuItemProps,
}: {
  group: DropdownItems[]
  menuItemProps?: MenuItemProps
}) {
  return (
    <div tw="p-1">
      {group.map((item, index) => (
        <Item {...item} key={index} menuItemProps={menuItemProps} />
      ))}
    </div>
  )
}

function Item({
  label,
  menuItemProps,
  ...rest
}: {
  label: string
  menuItemProps?: MenuItemProps
}) {
  return (
    <Menu.Item key={label} {...menuItemProps}>
      {({ active }: { active: boolean }) => (
        <button
          css={[
            active ? tw`bg-violet-500 text-white` : tw`text-gray-900`,
            tw`flex rounded-md items-center w-full p-2 text-sm`,
          ]}
          {...rest}
        >
          {label}
        </button>
      )}
    </Menu.Item>
  )
}
