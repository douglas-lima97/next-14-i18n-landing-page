import Button from '@root/components/molecules/button/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Index() {
    const t = useTranslations('home')

    return (
        <main>
            <section className="container mx-auto px-4 pb-8 pt-16 md:px-0">
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-5xl font-bold">{t('callToAction.title')}</h1>
                        <p className="">{t('callToAction.subtitle')}</p>
                    </div>
                    <div>
                        <Button>{t('callToAction.button')}</Button>
                    </div>
                </div>
                <div></div>
            </section>
            <section className="container mx-auto px-4 pb-8 pt-16 md:px-0">
                <div>
                    <h2 className="text-3xl font-bold">{t('overview.title')}</h2>
                </div>
                <div className="grid grid-cols-4">
                    <div>
                        <h3 className="opacity-80">{t('overview.worldArts')}</h3>
                        <p className="text-3xl font-bold">+30.000</p>
                    </div>
                    <div>
                        <h3 className="opacity-80">{t('overview.digitalArtists')}</h3>
                        <p className="text-3xl font-bold">+17.000</p>
                    </div>
                    <div>
                        <h3 className="opacity-80">{t('overview.liveAuctions')}</h3>
                        <p className="text-3xl font-bold">+22.000</p>
                    </div>
                    <div>
                        <h3 className="opacity-80">{t('overview.uniqueProducts')}</h3>
                        <p className="text-3xl font-bold">+50.000</p>
                    </div>
                </div>
            </section>
            <section className="container mx-auto flex flex-col gap-16 px-4 pb-8 pt-16 md:px-0">
                <div>
                    <h1 className="mb-8 text-4xl font-bold">{t('popular.title')}</h1>
                    <nav>
                        <ul className="flex gap-8 font-medium">
                            <li>{t('popular.option.all')}</li>
                            <li>{t('popular.option.hapePrime')}</li>
                            <li>{t('popular.option.lazyLions')}</li>
                            <li>{t('popular.option.peacefulApe')}</li>
                        </ul>
                    </nav>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="flex h-96 flex-col gap-8 rounded-2xl bg-white bg-opacity-5 p-8">
                        <div className="relative flex-grow rounded-lg">
                            <Image src="/next.svg" alt="" fill className="w-auto" />
                        </div>
                        <div>
                            <h4>Cyber Samurai #001</h4>
                            <p></p>
                        </div>
                    </div>
                    <div className="flex h-96 flex-col gap-8 rounded-2xl bg-white bg-opacity-5 p-8">
                        <div className="relative flex-grow rounded-lg">
                            <Image src="/next.svg" alt="" fill className="w-auto" />
                        </div>
                        <div>
                            <h4>Cyber Samurai #001</h4>
                            <p></p>
                        </div>
                    </div>
                    <div className="flex h-96 flex-col gap-8 rounded-2xl bg-white bg-opacity-5 p-8">
                        <div className="relative flex-grow rounded-lg">
                            <Image src="/next.svg" alt="" fill className="w-auto" />
                        </div>
                        <div>
                            <h4>Cyber Samurai #001</h4>
                            <p></p>
                        </div>
                    </div>
                    <div className="flex h-96 flex-col gap-8 rounded-2xl bg-white bg-opacity-5 p-8">
                        <div className="relative flex-grow rounded-lg">
                            <Image src="/next.svg" alt="" fill className="w-auto" />
                        </div>
                        <div>
                            <h4>Cyber Samurai #001</h4>
                            <p></p>
                        </div>
                    </div>
                    <div className="flex h-96 flex-col gap-8 rounded-2xl bg-white bg-opacity-5 p-8">
                        <div className="relative flex-grow rounded-lg">
                            <Image src="/next.svg" alt="" fill className="w-auto" />
                        </div>
                        <div>
                            <h4>Cyber Samurai #001</h4>
                            <p></p>
                        </div>
                    </div>
                    <div className="flex h-96 flex-col gap-8 rounded-2xl bg-white bg-opacity-5 p-8">
                        <div className="relative flex-grow rounded-lg">
                            <Image src="/next.svg" alt="" fill className="w-auto" />
                        </div>
                        <div>
                            <h4>Cyber Samurai #001</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <Button variant="outlined">{t('popular.action.explore')}</Button>
                </div>
            </section>
        </main>
    )
}
