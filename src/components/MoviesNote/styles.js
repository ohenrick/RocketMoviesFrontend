import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-bottom: 24px;
    padding: 32px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.PINK_50};

    > h1 {
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        margin-top: 15px;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
        font-size: 16px;
        font-weight: 400;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;

