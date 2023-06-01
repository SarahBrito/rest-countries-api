import styled from "styled-components"


export const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 60px;
    
    & .button__back {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 132px;
        height: 42px;
        margin: 72px 0;
        background-color: ${props => props.theme.colors.primary};
    }
`

export const CountryInfo = styled.div`
  display: flex;
  gap: 132px;
`;


export const CountryImage = styled.div`
  & img {
    width: 558px;
    height: 408px;
  }
`;


export const CountryDetails = styled.div`
  width: 100%;
  & .details__container {
    max-height: 140px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    
  }


  & h2 {
        margin-bottom: 48px;
  }

  & .info__name {
    font-weight: 600;
    margin-bottom: 6px;
    font-size: 14px;
    
  }

  & span {
    font-weight: 300;
    margin-left: 6px;
  }
`;