import styled from "styled-components"


export const ContainerInfo = styled.div`
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
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }
`

export const CountryInfo = styled.div`

  display: flex;
  gap: 132px;
  align-items: center;


  @media (max-width: 1000px) {
    gap: 32px;
      flex-wrap: wrap;
  }

  @media (max-width: 400px) {
    height: 75vh;
  }
`;


export const CountryImage = styled.div`

  width: 100%;
  max-width: 550px;
  height: 408px;

  & img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {

    max-width: 375px;
    height: 278.18px;

    & img {
    width: 100%;
    height: 100%;
  }
  }
`;

export const CountryDetails = styled.div`

  width: 100%;

  & .details__container {
    display: flex;
    gap: 120px;
    margin-bottom: 48px;

    @media (max-width: 500px) {
      justify-content: center;
      flex-direction: column;
      gap: 32px;
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

  & .details__border-countries {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;

  }
    & .border-countries-list {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;

    }

    & .borderCountry {
      font-size: 14px;
      background: ${props => props.theme.colors.primary};
      padding: 4px 12px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      margin-left: 0;
    }
  }
`;
