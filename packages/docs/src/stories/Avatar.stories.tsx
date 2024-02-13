import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@lmf-design-system-study/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/lilianmartinsfritzen.png',
    alt: 'Lílian M Fritzen',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
