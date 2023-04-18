import styled from "styled-components";

interface IBanner {
    url: string
}

export const Banner = styled.div`
    /* max-width: 100vw;
    width: 100%;
    height: 544px;
    background: url(${(props: IBanner) => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
`

export const BannerIntro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 50px;

    > section {
        display: flex;
        flex-direction: column;
        max-width: 588px;

        > h1 {
            font-family: 'Baloo 2', sans-serif;
            color: #272221;
            font-size: 48px;
            font-weight: 800;
            line-height: 62px;
        }

        > h2 {
            margin-top: 1rem;
            font-family: 'Baloo 2', sans-serif;
            color: #272221;
            font-size: 20px;
            font-weight: 400;
            line-height: 26px;
        }
    }

    > img {
        max-width: 476px;
        width: 100%;
        height: 360px;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`