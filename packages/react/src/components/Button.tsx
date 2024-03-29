import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    background: '$gray200',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$blue500',

        '&:not(:disabled):hover': {
          background: '$blue300',
        },
        '&:disabled': {
          background: '$gray200',
          cursor: 'not-allowed',
        },
      },

      secondary: {
        color: '$blue300',
        border: '2px solid $blue500',

        '&:not(:disabled):hover': {
          background: '$blue500',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray100',
          borderColor: '$gray200',
          background: 'transparent',
          cursor: 'not-allowed',
        },
      },

      tertiary: {
        color: '$gray100',
        border: '2px solid $gray400',

        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray100',
          borderColor: '$gray600',
          cursor: 'not-allowed',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
