import styled from "styled-components"


export const CardCountry:any = styled.div`
    width: 240px;
    height: 300px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    transition-property: box-shadow, transform;
    transition-duration: 350ms;
    transition-timing-function: ease;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
    cursor: pointer;

    & img {
        width: 100%;
        height: 142px;
    }

    & section {
        padding: 28px 20px;
    }

    & p:first-child {
        font-weight: 800;
        margin-bottom: 16px;
    }

    & .info__name {
        font-weight: 600;
        font-size: 14px;
    }

    & span {
        font-weight: 300;
        margin-left: 6px;
    }

    &:is(:hover, :focus) {
    box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
}

`
