import { TwStyle } from 'twin.macro'

import {
  Transition as HeadlessUiTransition,
  TransitionEvents,
} from '@headlessui/react'

type TransitionProps = {
  enter?: TwStyle
  enterFrom?: TwStyle
  enterTo?: TwStyle
  entered?: TwStyle
  leave?: TwStyle
  leaveFrom?: TwStyle
  leaveTo?: TwStyle
  children: React.ReactNode
  show?: boolean
  appear?: boolean
  unmount?: boolean
} & TransitionEvents

export default function Transition(props: TransitionProps) {
  return <HeadlessUiTransition as="div" {...getProps(props)} />
}
Transition.Child = function TransitionChild(props: TransitionProps) {
  return <HeadlessUiTransition.Child {...getProps(props)} />
}
function getProps(props: TransitionProps) {
  return {
    ...props,
    enter: 'enter',
    enterFrom: 'enter-from',
    enterTo: 'enter-to',
    entered: 'entered',
    leave: 'leave',
    leaveFrom: 'leave-from',
    leaveTo: 'leave-to',
    beforeEnter: () => props.beforeEnter?.(),
    afterEnter: () => props.afterEnter?.(),
    beforeLeave: () => props.beforeLeave?.(),
    afterLeave: () => props.afterLeave?.(),
  }
}
