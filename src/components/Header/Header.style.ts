import styled from "styled-components";
import { Header as Headers} from "./Header";

interface IHeader {
    display?: string
}

export const Header = styled(Headers)`
    background-color: #FAFAFA;
    max-width: 100vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.5rem;

    > img {
        max-width: 85px;
        width: 100%;
        max-height: 40px;
        height: 100%;
    }
    
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Location = styled.div `
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: #EBE5F9;
    border-radius: 6px;
    gap: 4px;

    > p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
         color: #4b2995;
    }

     @media only screen and (max-width: 768px) {
        display: none;
    }
`

export const Cart = styled.div `
    background-color: #F1E9C9;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
    margin-left: 12px;
    position: relative;

    &:hover {
        cursor: pointer;
    }

    > div {
        position: absolute;
        left: 75%;
        top: -5px;
        background-color: #C47F17;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: ${(props: IHeader) => props.display};

        > p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            color: #FFFFFF;
            text-align: center;
        }
    }
`