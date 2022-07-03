/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['ru-RU'],
        defaultLocale: 'ru-RU',
        localeSubpaths: {
            'ru-RU': 'ru'
        }
    },
    experimental: {
        images: {
            allowFutureImage: true
        }
    }
}

module.exports = nextConfig
