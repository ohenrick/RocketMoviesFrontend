import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
    background-color: ${({ theme }) => theme.COLORS.PINK_50};

`;