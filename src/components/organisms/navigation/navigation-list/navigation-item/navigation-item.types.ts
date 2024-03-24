import { ComponentProps } from 'react'

export interface INavigationItem {
    label: string
    href: string
}

export type NavigationItemProps<VariantProps extends Record<string, unknown>> = Omit<ComponentProps<'li'>, 'children'> &
    VariantProps &
    INavigationItem
