import '../styles/globals.scss'
import {ThemeProvider} from 'next-themes'

import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider defaultTheme={"light"}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
