import styled from 'styled-components';

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
      padding: 64px 0;
    }
`;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 40px;
    text-align: justify;
  }
`;

export const HeaderMovie = styled.div`
  .MT {
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    span {
      margin-right: 10px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_10};
      font-size: 20px;
    }
  }

  .CN {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_10};
    }
  }
`;

export const TagS = styled.div`
  margin: 5px 0;
`;