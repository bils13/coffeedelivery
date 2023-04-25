import styled from "styled-components";

export const Icons = styled.section`
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 15px;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

`


export const Icon = styled.div`
    display: flex;
    align-items: center;

    > p {
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 400;
        color: #574F4D;
        margin-left: 0.7rem;
        text-align: center;

        @media only screen and (max-width: 768px) {
            margin-top: 0.5rem;
        }
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const WrapperIcon = styled.div`
    background-color: #C47F17;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ListCoffee = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 256px);
    row-gap: 2.5rem;
    column-gap: 2rem;

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const WrapperCoffe = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

export const Coffees = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > h3 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 32px;
        font-weight: 800;
        color: #403937;
        margin-bottom: 54px;
        align-items: left;
    }
`