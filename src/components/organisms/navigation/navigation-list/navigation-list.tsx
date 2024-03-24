'use client'

import { usePathname } from 'next/navigation'
import { NavigationListProps } from './navigation-list.types'
import NavigationItem from './navigation-item/navigation-item'

export const NavigationList = ({ items, ...props }: NavigationListProps) => {
    const pathname = usePathname()

    return (
        <ul className="flex gap-8" {...props}>
            {items.map((item, index) => (
                <NavigationItem {...item} active={item.href === pathname} key={`nav-item-${index}`} />
            ))}
        </ul>
    )
}
