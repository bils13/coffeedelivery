import styled from "styled-components";

export const Form = styled.div`
    background-color: #F3F2F2;
    border-radius: 6px;
    width: 640px;
    padding: 40px;

    .border {
        border: 1px solid red;
    }
`

export const Address = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;
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

export const Input = styled.input`
    padding: 16px;
    outline: 0;
    border: none;
    background-color: #EEEDED;
    color: #8D8686;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border-radius: 4px;
    margin-bottom: 16px;
    width: ${(props) => props.width};
`

export const WrapperInput = styled.div`
    display: flex;
    justify-content: space-between;
`
