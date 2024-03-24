import { useTranslations } from 'next-intl'
import { HeaderProps } from './header.types'
import { Navigation } from '../navigation/navigation'
import Button from '@root/components/molecules/button/button'

export const Header = ({ ...props }: HeaderProps) => {
    const t = useTranslations('layout.header')

    return (
        <header className="container mx-auto mt-0 px-4 md:mt-8 md:px-0" {...props}>
            <nav className="flex items-center justify-between gap-8">
                <a className="text-xl font-bold text-pink-800" href="#">
                    {t('brand')}
                </a>
                <Navigation />
                <Button variant="outlined">{t('getInTouch')}</Button>
            </nav>
        </header>
    )
}
