import { useTranslations } from 'next-intl'
import { INavigationItem } from './navigation-list/navigation-item/navigation-item.types'
import { NavigationList } from './navigation-list/navigation-list'

export const Navigation = () => {
    const t = useTranslations('layout.navigation')
    const navigationItems: INavigationItem[] = [
        {
            label: t('home'),
            href: '/',
        },
        {
            label: t('all'),
            href: '/all',
        },
        {
            label: t('team'),
            href: '/team',
        },
        {
            label: t('terms'),
            href: '/terms',
        },
        {
            label: t('contact'),
            href: '/contact',
        },
    ]

    return <NavigationList items={navigationItems} />
}
