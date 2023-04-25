import styled from "styled-components";

export const CoffeeCard = styled.div`
    position: relative;
    background-color: #F3F2F2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 6px 36px;
    width: 256px;

    > img {
        position: relative;
        top: -40px;
        margin-bottom: -28px;
        width: 120px;
        height: 120px;
    }

    > h3 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: #403937;
        margin-bottom: 8px;
    }

    > P {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #8D8686;
        line-height: 130%;
        text-align: center;
        margin-bottom: 33px;
    }
`

export const CoffeeTag = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;

    > label {
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
        font-weight: 700;
        color: #c47f17;
        background-color: #F1E9C9;
        border-radius: 100px;
        padding: 4px 8px;
        margin-left: 4px;
        margin-bottom: 16px;
    }
`

export const CoffeeBuy = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    > h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
        font-size: 24px;
        color: #574F4D;
        line-height: 130%;
        text-align: center;

        > span {
            font-weight: 400;
            font-size: 14px;
            &:after {
                content: ' ';
            }
        }
    }  
`

export const Amount = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    align-items: center;

`

export const Wrapper = styled.div`
    display: flex;
    padding: 10px;
    width: 72px;
    align-items: center;
    justify-content: space-between;
    background: #E6E5E5;
    border-radius: 6px;

    > p {
        color: #8047F8;
        font-size: 20px;
        &:hover {
            cursor: pointer;
        }
    }

    > h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 400;
    }
`

export const Cart = styled.div`
    padding: 8px;
    background-color: #4B2995;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    &:hover {
        cursor: pointer;
    }
`