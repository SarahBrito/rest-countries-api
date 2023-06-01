import { createContext, useContext, useState, useEffect, ChangeEvent } from "react";


interface Country {
    name: string;
    region:string;
    capital: string;
    subregion: string;
    population: number;
  }


interface CountriesContextProps {
    countries: Array<string>,
    handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
    searchTitle: string,
    getFilteredCountries: (value:string)=> void
}

interface CountriesProvaiderProps {
    children: React.ReactNode
}

export const CountryContext = createContext({} as CountriesContextProps);

const CountryProvaider = ({ children }: CountriesProvaiderProps) => {

    const [countries, setCountries] = useState([])
    const [initialCountries, setInitialCountries] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');

    useEffect(()=>{
        showCardsCountries()
    },[])

    async function showCardsCountries() {
        try {
            const response = await fetch('data.json', {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            });
            const data = await response.json();
            setInitialCountries(data.data)
            setCountries(data.data);
          } catch (error) {
            console.log(error)
          }
    }

    const getFilteredCountries = (region: string) =>{
      const newCards = initialCountries.filter((item:Country) =>
        item.region == region
      )
      console.log(newCards)
      setCountries(newCards)
    }

    const searchCountriesByTitle = (title:string) => {
        const filteredCountries = initialCountries.filter((country:Country) =>
        country.name.toLowerCase().includes(title.toLowerCase())
        );

        setCountries(filteredCountries);
      };

      const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setSearchTitle(value);

        if (value.trim() === '') {
          setCountries(initialCountries);
        } else {
          searchCountriesByTitle(value);
        }
      };

    return (
        <CountryContext.Provider
            value={{
                countries,
                handleSearchInputChange,
                searchTitle,
                getFilteredCountries
            }}>
            {children}
        </CountryContext.Provider>
    )
}


export const useCountries = () =>{
    const context = useContext(CountryContext)
    const {
      countries,
      handleSearchInputChange,
      searchTitle,
      getFilteredCountries
    } = context

    return {
      countries,
      handleSearchInputChange,
      searchTitle,
      getFilteredCountries}
}

export default CountryProvaider;
