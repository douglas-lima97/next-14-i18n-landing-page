import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Navigation } from '../navigation/navigation'
import { FooterProps } from './footer.types'

export const Footer = ({ ...props }: FooterProps) => {
    const t = useTranslations('layout.footer')

    return (
        <footer className="container mx-auto" {...props}>
            <section>
                <div className="grid grid-cols-3">
                    <div>
                        <Image src="/next.svg" alt="" width={80} height={80} />
                        <div>
                            <p>{t('socialMedia.email.gmail')}</p>
                            <p>{t('socialMedia.email.yahoo')}</p>
                        </div>
                    </div>
                    <div>
                        <Image src="/next.svg" alt="" width={80} height={80} />
                        <div>
                            <p>{t('socialMedia.telegram.title')}</p>
                            <p>{t('socialMedia.telegram.account')}</p>
                        </div>
                    </div>
                    <div>
                        <Image src="/next.svg" alt="" width={80} height={80} />
                        <div>
                            <p>{t('socialMedia.phone.primary')}</p>
                            <p>{t('socialMedia.phone.secondary')}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </section>
            <section className="grid grid-cols-2 border-t border-white border-opacity-15 py-16">
                <div>
                    <p>{t('copyright')}</p>
                </div>
                <div>
                    <nav>
                        <Navigation />
                    </nav>
                </div>
            </section>
        </footer>
    )
}
