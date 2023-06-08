import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 70px;
    background-color: ${props => props.theme.colors?.primary};
    font-size: 24px;
    font-weight: 800;
    padding: 20px 60px;
    display: flex;
    position: relative;

    /* @media (max-width: 1000px) {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
  } */

`
