import styled from "styled-components";

interface IDelivery {
    background: string
}

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5rem;
`

export const WrapperInfo = styled.section`
    margin-top: 3rem;

    > h1 {
        font-family: 'Baloo 2', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        color: #C47F17;
    }

    > h2 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
        color: #403937;
    }

`

export const Info = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 1.5rem;
    position: relative;
    border-radius: 6px 36px 6px 36px;
    width: 526px;
    box-sizing: border-box;
    gap: 2rem;
    background: #ffffff;
    background-clip: padding-box;
    margin-top: 2rem;
    border: 1px solid transparent;
    border-radius: 7px 37px 7px 37px;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        inset: -1px;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    }
    
`

export const Infos = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Text = styled.div`
    
    > label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #574F4D;

        > span {
            font-weight: 600;
        }
    }

    > p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #574F4D;

        > span {
            font-weight: 400;
        }
    }
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${((props: IDelivery) => props.background)};
    border-radius: 1000px;
    width: 32px;
    height: 32px;
`

export const Image = styled.img`
    width: 492px;
    height: 293px;
`