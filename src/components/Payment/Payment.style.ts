import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 12px;
    background-color: #F3F2F2;
    border-radius: 6px;
    width: 640px;
    padding: 40px;
`

export const Pay = styled.div`
    display: flex;
    align-items: flex-start;
`

export const Title = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #403937;
    line-height: 130%;
    margin-left: 8px;

    > h4 {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #403937;
        line-height: 130%;
    }
`

export const PaymentOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`

export const Option = styled.button`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 33%;
    padding: 16px;
    gap: 12px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    color: #574F4D;
    background: #E6E5E5;
    border: none;
    border-radius: 6px;
    
    &:hover {
        cursor: pointer;
        background-color: #c7c7c7;
    }

    .selected {
        border: 1px solid red;
    }
`