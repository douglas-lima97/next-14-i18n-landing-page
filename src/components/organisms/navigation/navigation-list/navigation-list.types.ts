import { ComponentProps } from 'react'
import { INavigationItem } from './navigation-item/navigation-item.types'

export interface NavigationListProps extends Omit<ComponentProps<'ul'>, 'children'> {
    items: INavigationItem[]
}
