import styled from "styled-components";

export const Container = styled.span`
   > span {
    display: block;
    font-size: 36px;
    font-weight: 500;
    line-height: 47px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;