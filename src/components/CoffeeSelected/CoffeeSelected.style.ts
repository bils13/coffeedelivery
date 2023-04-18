import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 2rem;
`

export const Coffee = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;


    > img {
        width: 64px;
        height: 64px;
    }

    > h3 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #574F4D;
    }
`

export const Amount = styled.div`
    display: flex;
    flex-direction: column;

    > h3 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #403937;
    }
`

export const Amounts = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 8px;
    
    &:hover {
        cursor: pointer;
    }
`

export const WrapperAmount = styled.div`
    display: flex;
    padding: 10px;
    width: 72px;
    align-items: center;
    justify-content: space-between;
    background: #E6E5E5;
    border-radius: 6px;

    > p {
        color: #8047F8;
        font-size: 16px;
        &:hover {
            cursor: pointer;
        }
    }

    > h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`

export const WrapperTrash = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    background: #E6E5E5;
    border-radius: 6px;
    justify-content: center;
    gap: 4px;
    width: 91px;

    > h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        color: #574F4D;
    }
`

export const Line = styled.div`
    margin-top: 2rem;
    border: 1px solid #E6E5E5;
`