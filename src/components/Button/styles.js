import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.PINK_10 : theme.COLORS.GRAY_40};
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.GRAY_10 : theme.COLORS.PINK_10};
    font-size: 16px;
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }

    
    
`;