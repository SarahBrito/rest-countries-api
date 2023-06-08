import Head from 'next/head'
import Header from '../components/Header'
import GlobalStyle from '../styles/globals'
import { MainContainer } from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import dark from '../styles/themes/dark'
import Filters from '../components/Filters'
import ShowCountries from '../components/ShowCountries'
import CountryProvaider from '../context/Country'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rest Countries Api</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CountryProvaider>
        <ThemeProvider theme={dark}>
          <GlobalStyle/>
          <Header />
          <MainContainer>
            <Filters />
            <ShowCountries />
          </MainContainer>
        </ThemeProvider>
      </CountryProvaider>

    </>
  )
}
