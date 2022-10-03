import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* {withGlobalStyles withNormalizeCSS} */}
            <MantineProvider theme={{ colorScheme: 'dark' }} >
                <Component {...pageProps} />
            </MantineProvider >
        </>
    )
}

export default MyApp
