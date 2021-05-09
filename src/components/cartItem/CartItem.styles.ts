import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    div {
        flex: 1;
    }

    .information {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .amount, .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    img {
        max-width: 80px;
        object-fit: cover;
        margin: 40px;
    }
`;