import GlobalStyle from '../../styles/globals'
import { ContainerInfo, CountryInfo, CountryImage, CountryDetails } from '../../styles/styles'
import { ThemeProvider } from 'styled-components'
import dark from '../../styles/themes/dark'
import Header from '../../components/Header'
import CountryProvaider, { useCountries } from '@/context/Country'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Country } from '@/context/Country'

const PageDatails = () => {
  const { query } = useRouter()
  const idCountry= query?.id

  const {countries} = useCountries()

  return (
    <CountryProvaider>
      <ThemeProvider theme={dark}>
        <GlobalStyle/>
        <Header />
        <ContainerInfo>
          <Link href={'/'} className='button__back'>
              Back
          </Link>
      {countries.filter((item:any) => item.numericCode == idCountry).map((country:any) => (
          <CountryInfo key={country.numericCode}>
              <CountryImage>
                <picture>
                <img src={country.flags.png} alt="Imagem do País" />
                </picture>
              </CountryImage>
              <CountryDetails>
              <h2>{country.name}</h2>
              <div className="details__container">
                <div className="column-1">
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
                </div>
                <div className="column-2">
                  <p className='info__name'>Top Level Domain:
                    <span>{country.topLevelDomain}</span>
                  </p>
                  <p className='info__name'>Currencies:
                    <span>{country.currencies? country.currencies[0].name: 'undefined'}</span>
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
              </div>
              {country.borders &&
              <div className="details__border-countries">
                <p className='info__name'>
                  Border Countries:
                </p>
                <div className="border-countries-list">
                {country.borders.filter((borderCountry: string) => {
                return countries.some((countryItem: Country) => countryItem.alpha3Code === borderCountry);
              }).slice(0, 3).map((borderCountry:string) => (
                  <span key={borderCountry} className='borderCountry'>
                  {countries.find((countryItem:Country) => countryItem.alpha3Code === borderCountry)?.name || borderCountry}
                  </span>
                ))}
                </div>
              </div>
              }

            </CountryDetails>
          </CountryInfo>
          ))}
        </ContainerInfo>
      </ThemeProvider>
    </CountryProvaider>

  );
}

export default PageDatails;
