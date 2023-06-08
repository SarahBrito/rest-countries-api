import styled from 'styled-components'

export const Container = styled.div`
    height: 70px;
    margin: 24px 0;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 790px) {
      gap: 12px;
  }


`


export const SearchCountry = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 436px;
    gap: 24px;
    background: ${props => props.theme.colors.primary};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    padding: 18px 20px;
    height: 54px;
    border-radius: 4px;

    @media (max-width: 790px) {
      width: 100%;
  }

  @media (max-width: 580px) {
      margin-bottom: 32px;
  }

    input {
        background: transparent;
        width: 100%;
        margin-left: 50px;
        color: ${props => props.theme.colors.text};
        &::placeholder {
           color: ${props => props.theme.colors.text};
        }
    }

    .icon-search {
      position: absolute;
      margin-left: 24px;
      left: 0;
      font-size: 24px;
    }
`

export const FilterRegion = styled.div`

  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 14px;





  button {
    display: flex;
    width: 180px;
    border: none;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    font-size: 14px;
    background: ${props => props.theme.colors.primary};
    padding: 18px 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    border-radius: 4px;
    cursor: pointer;
    color: ${props => props.theme.colors.text};

  }
`
export const FilterItem = styled.ul`
  position: absolute;
  width: 180px;
  background: ${props => props.theme.colors.primary};
  padding: 18px 20px;
  list-style: none;
  border-radius: 4px;
  top: 110%;
  z-index: 1;

  li + li {
    margin-top: 6px;
  }
`
