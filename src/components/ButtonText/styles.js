import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.PINK_10};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
  gap: 8px;

  display: flex;
  align-items: center;
`; 