import type { AppProps } from 'next/app'
import { Container } from '../styles/globals';
import CountryProvaider from '@/context/Country';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountryProvaider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </CountryProvaider>
    
  )
}
