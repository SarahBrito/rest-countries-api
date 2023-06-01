import GlobalStyle from '../../styles/globals'
import { Container, CountryInfo, CountryImage, CountryDetails } from './styles'
import { ThemeProvider } from 'styled-components'
import dark from '../../styles/themes/dark'
import Header from '../../../components/Header'
import CountryProvaider, { useCountries } from '@/context/Country'
import { useRouter } from 'next/router'
import Link from 'next/link'

const PageDatails = () => {
  const { query } = useRouter()
  const idCountry= query?.id

  const {countries} = useCountries()

  return (
    <CountryProvaider>
      <ThemeProvider theme={dark}>
        <GlobalStyle/>
        <Header />
        <Container>
          <Link href={'/'} className='button__back'>
              back
          </Link>
      {countries.filter((item:any) => item.numericCode == idCountry).map((country:any) => (
          <CountryInfo key={country.numericCod}>
              <CountryImage>
                <picture>
                <img src={country.flags.png} alt="Imagem do País" />
                </picture>
              </CountryImage>
              <CountryDetails>
              <h2>{country.name}</h2>
              <div className="details__container">
                <p className='info__name'>Native Name:
                  <span>{country.nativeName}</span>
                </p>
                <p className='info__name'>Population:
                  <span>{country.population}</span>
                </p>
                <p className='info__name'>Region:
                  <span>{country.region}</span>
                </p>
                <p className='info__name'>Sub. Region:
                  <span>{country.subregion}</span>
                </p>
                <p className='info__name'>Capital:
                  <span>{country.capital}</span>
                </p>
                <p className='info__name'>Top Level Domain:
                  <span>{country.topLevelDomain}</span>
                </p>
                <p className='info__name'>Currencies:
                  <span>{country.currencies[0].name}</span>
                </p>
                <p className='info__name'>Languages:
                  <span>{country.languages.map((lang:any)=>{
                  return(
                    <span key={lang.name}>
                      {lang.name}
                    </span>)
                  })}
                    </span>
                </p>
              </div>
              <div className="details__border-countries">
                <p>Border Countries: </p>
              </div>
            </CountryDetails>
          </CountryInfo>
          ))}
        </Container>
      </ThemeProvider>
    </CountryProvaider>

  );
}

export default PageDatails;
