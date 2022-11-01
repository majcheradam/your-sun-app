import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Polish from '../database/lang/pl.json'
import English from '../database/lang/en.json'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

console.log(Polish)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <Component {...pageProps} layers={Polish.layers} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
