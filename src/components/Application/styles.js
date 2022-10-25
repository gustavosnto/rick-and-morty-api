import styled from "styled-components";

export const ContainerApp = styled.div`
    width: 100%;
    max-width: 1248px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
`;

export const HeaderApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #FFFFFF22;
    h1 {
        font-size: 3.2rem;
    }
    span {
        font-size: 1.6rem;
        opacity: 0.6;
    }
`;

export const ContentCharacters = styled.div`
    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
    }
    button {
        display: block;
        line-height: 6.5rem;
        background-color: #5b1fa6;
        border-radius: 4px;
        margin: 0 auto;
        width: 30rem;
        border: none;
        color: #FFF;
        font-size: 1.8rem;
        margin-top: 4.8rem;
        transition: filter 0.3s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`;