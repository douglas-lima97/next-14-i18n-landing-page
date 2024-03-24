import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FCE1FF',
                    100: '#F3B2FE',
                    200: '#EB79FE',
                    300: '#DF1CFF',
                    400: '#D800FF',
                    500: '#C600F1',
                    600: '#B200EE',
                    700: '#9600EA',
                    800: '#7B00E5',
                    900: '#3A00DC',
                },
            },
        },
    },
    plugins: [],
}
export default config
