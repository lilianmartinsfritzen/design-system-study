import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@lmf-design-system-study/react'

export default {
  title: 'Surfaces/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quo! Iste perspiciatis numquam, fuga quod ut tenetur molestiae iure quidem laudantium autem voluptates laboriosam aliquid sapiente quae placeat accusantium quos?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Exemplo de texto em em negrito.',
    as: 'strong',
  },
}
