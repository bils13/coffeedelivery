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