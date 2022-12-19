import '../styles/globals.scss'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { useRouter } from 'next/router'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Polish from '../database/lang/pl.json'
import English from '../database/lang/en.json'
import German from '../database/lang/de.json'
import French from '../database/lang/fr.json'

const roboto = Roboto({
  subsets: ['latin-ext'],
  weight: '400',
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { locale } = router
  const language: any =
    locale === 'pl'
      ? Polish
      : locale === 'en'
      ? English
      : locale === 'de'
      ? German
      : locale === 'fr' && French
  return (
    <div className={roboto.className}>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Component
          {...pageProps}
          layers={language.layers}
          inputs={language.inputs}
        />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
