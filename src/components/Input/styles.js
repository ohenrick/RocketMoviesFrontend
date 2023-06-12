import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_20};
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 10px;
    margin-right: 64px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        
        &::placeholder {
        color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
        }
    }

    svg {
        margin-left: 16px;
        color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
    }
`;