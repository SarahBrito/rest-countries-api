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

export const Container = styled.div`
    max-width: 1440px;
    min-width: 375px;
    margin: 0 auto;
    /* border: 1px solid red; */
    padding: 0 86px;
`


