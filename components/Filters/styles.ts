import styled from 'styled-components'

export const Container = styled.div`
    height: 70px;
    margin: 40px 0 ;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`
export const Select = styled.select`

    width: 180px;
    padding: 0.75rem;
    height: 54px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    /* Arrow */
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23fafafa%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;

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
  top: 160%;
  z-index: 1;

  li + li {
    margin-top: 6px;
  }
`
