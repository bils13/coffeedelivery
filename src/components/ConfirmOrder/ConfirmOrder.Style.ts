import styled from "styled-components";


export const Wrapper = styled.section`
    width: 448px;
    background: #F3F2F2;
    border-radius: 6px 44px;
    padding: 40px;
`

export const Title = styled.h4`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;

    > h4 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #574F4D;
    }

    > h3 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #574F4D;
    }

    > h2 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #403937;
    }
`

export const Button = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 12px;
    display: flex;
    justify-content: center;
    width: 100%;
    background: #DBAC2C;
    border-radius: 6px;
    border: none;
    margin-top: 1rem;
    
    &:hover {
        cursor: pointer;
        background-color: #c08f2c;
    }
`