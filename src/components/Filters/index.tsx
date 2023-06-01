import { useState } from 'react';
import { Container } from './styles';
import { SearchCountry, FilterRegion, FilterItem } from './styles';
import { useCountries } from '@/context/Country';
import { MdKeyboardArrowDown, MdOutlineSearch } from 'react-icons/md'

const Filters = () => {
    const {  handleSearchInputChange, searchTitle, getFilteredCountries } = useCountries()
    const [isOpen, setIsOpen] = useState(false);
    const [filterTitle, setFilterTitle] = useState('Filter by Region');
    const handleOpen = () => setIsOpen( prev => !prev)

    const handleRegionSelected = (value:string) =>{
      getFilteredCountries(value)
      setFilterTitle(value)
      setIsOpen(false)
    }

    return (
        <Container>
            <SearchCountry>
                <input
                type="text"
                value={searchTitle}
                placeholder="Search for a country..."
                onChange={handleSearchInputChange}
               />
               <MdOutlineSearch  className='icon-search'/>
            </SearchCountry>

            <FilterRegion>
              <button onClick={handleOpen}>
                {filterTitle}
                <MdKeyboardArrowDown />
              </button>
              {isOpen &&
              <FilterItem>

                <li onClick={()=>handleRegionSelected('Africa')}>Africa</li>
                <li onClick={()=>handleRegionSelected('Americas')}>America</li>
                <li onClick={()=>handleRegionSelected('Asia')}>Asia</li>
                <li onClick={()=>handleRegionSelected('Europe')}>Europe</li>
                <li onClick={()=>handleRegionSelected('Oceania')}>Oceania</li>
              </FilterItem>
              }
            </FilterRegion>
        </Container>
     );
}

export default Filters;
