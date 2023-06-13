import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_20};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 19px 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
    }
`;