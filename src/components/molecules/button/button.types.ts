import { ComponentProps } from 'react'

export type ButtonProps<VariantProps> = ComponentProps<'button'> & VariantProps
