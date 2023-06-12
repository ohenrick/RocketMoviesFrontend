import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.PINK_10};
      border-radius: 8px;
    }
  }
`

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
`;

export const HeaderPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;

  > button {
    max-width: 207px;
    height: 48px;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  }

`;

export const NewMovie = styled.div`
    grid-area: newmovie;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 207px;
    height: 48px;
    border-radius: 8px;
    padding: 32px;
    font-size: 16px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.COLORS.PINK_10};
    color: ${({ theme }) => theme.COLORS.GRAY_20};

    svg {
      margin-right: 4px;
      font-size: 20px;
      flex: none;
    }

`;

export const Section = styled.div`
  grid-area: content;
  padding: 0 64px;
`;