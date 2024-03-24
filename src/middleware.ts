import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['pt-BR', 'en'],

    // Used when no locale matches
    defaultLocale: 'pt-BR',
    localePrefix: 'as-needed',
})

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(pt-BR|en)/:path*'],
}
