import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@lmf-design-system-study/react'

export default {
  title: 'Surfaces/Heading',
  component: Heading,

  args: {
    children: 'Exemplo de Título',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Exemplo de título em H1.',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
