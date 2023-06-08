import styled from "styled-components"


export const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 12px 24px;

    & .button__back {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 132px;
        height: 42px;
        margin: 32px 0;
        background-color: ${props => props.theme.colors.primary};
    }


`

export const CountryInfo = styled.div`
  display: flex;
  gap: 132px;

  @media (max-width: 1060px) {
      gap: 50px;
  }

  @media (max-width: 1060px) {
      gap: 50px;
  }

  @media (max-width: 1000px) {
      gap: 50px;
      flex-wrap: wrap;
  }
`;


export const CountryImage = styled.div`
  width: 100%;
  max-width: 550px;
  min-height: 408px;

  @media (max-width: 400px) {
    min-height: 300px;
  }

  & img {
    width: 100%;
    min-height: 300px;
  }
`;


export const CountryDetails = styled.div`
  width: 100%;
  & .details__container {
    max-height: 140px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

    @media (max-width: 500px) {
      justify-content: center;
      flex-direction: column;
      flex-flow: column;
  }

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
