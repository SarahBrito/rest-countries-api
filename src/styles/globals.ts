import { createGlobalStyle }  from "styled-components";
import styled from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;

    }

    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    li {
    list-style: none;
    }

    input, select, option, button {
        border: none;
        outline: none;
    }
`
export const MainContainer = styled.div`

  display: flex;
  flex-direction: column;
  padding: 12px 24px;

  @media (max-width: 580px) {
      gap: 50px;
      overflow-x: hidden;
  }
`


export const Container = styled.div`
    max-width: 1440px;
    min-width: 375px;
    margin: 0 auto;
    overflow-x: hidden;

    @media (max-width: 580px) {
      overflow-x: hidden;
  }
`



