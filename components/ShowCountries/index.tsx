import { CardCountry } from './styles'
import styled, { css } from 'styled-components';

import { useRouter } from 'next/router';
import { useCountries } from '@/context/Country'


interface StyledContainerProps {
    condition: boolean;
  }

const ShowCountries = () => {

    const { countries, searchTitle } = useCountries()

    const {push} = useRouter()

    const showDatails = (id: string) => {
        console.log( id )
        push(`/details/${id}`)
    }


    const Container = styled.div<StyledContainerProps>`
    /* Estilos padrão */
    margin: 40px 0 ;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
    justify-content: space-between;

    /* Estilos condicionais */
    ${({ condition }) => condition && css`
      justify-content: flex-start;
    `}
  `;


    return (
        <Container condition={searchTitle.length > 1}>

          {countries.map((item: any, index: any)=>{
            return(

              <CardCountry key={index} onClick = {() => showDatails(item.numericCode)}>
                <picture>
                  <img
                      src={item.flags.png}
                      alt="Imagem do País"
                  />
                </picture>
                <section>
                    <p>{item.name}</p>
                    <p className='info__name'>Population:
                        <span>{item.population.toLocaleString()}</span>
                    </p>
                    <p className='info__name'>Region:
                        <span>{item.region}</span>
                    </p>
                    <p className='info__name'>Capital:
                        <span>{item.capital}</span>
                    </p>
                </section>
              </CardCountry>
            )
          })}

        </Container>

     );
}

export default ShowCountries;
