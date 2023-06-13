import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;

  grid-template-areas: 
  "header"
  "content";

  main {
    grid-area: content;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK_10};
      border-radius: 100px;
    }
    ::-webkit-scrollbar-button:start:decrement {
      height: 100px;
      display: block;
      background-color: transparent;
    }
  }
`;

export const Form = styled.form`
  max-width: 1130px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .InputC1 {
    display: flex;
    gap: 40px;
  }

  .Tags {
    width: 100%;

    > span {
      display: block;
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
    }

    .Moviesection {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      width: 100%;
      padding: 16px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.GRAY_40};
    }
  }
  
  .button-line {
      display: flex;
      gap: 20px;
    }
`;