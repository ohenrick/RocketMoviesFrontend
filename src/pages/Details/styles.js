// import styled from "styled-components";

// export const Container = styled.div`
//   width: 100%;
//   height: 100vh;

//   display: grid;
//   grid-template-rows: 105px auto;
//   grid-template-areas:
//     "header"
//     "content";
// `;

// export const Author = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;

//   margin-top: 24px;

//   span {
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;

//     color: ${({ theme }) => theme.COLORS.WHITE};
//   }

//   > img {
//     width: 16px;
//     height: 16px;
//     border-radius: 50%;
//   }

//   > svg {
//     width: 16px;
//     height: 16px;
//     color: ${({ theme }) => theme.COLORS.PINK_10};
//   }
// `;

// export const Tags = styled.div`
//   margin-block: 40px;
// `;

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  main {
    padding: 0 5rem;
    grid-area: content;
    overflow-y: auto;

    .movieAndRating {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 18px;
      height: 6rem;
      margin: 24px 0;

      > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 500;
        font-size: 40px;
        line-height: normal;
      }
      
    }

    .authorAndDate {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 48px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      > h3 {
        font-size: 16px;
        font-weight: 400;        
      }

      > span {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 400;             
        gap: 8px;
      }

        svg {
          font-size: 22px;
          color: ${({ theme }) => theme.COLORS.PINK_10};
        }
      }
    }

    .tags {
      display: flex;
      flex-direction: row;
      justify-content: start;
      margin-bottom: 4rem;
      
    }

    p {
      width: 80%;
      font-size: 18px;
      line-height: normal;
      text-align: justify;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.COLOR_GRAY1};
      display: flex;
      align-items: center;
      text-align: justify;
      justify-content: center;
    }

    footer {
      width: 80%;
      margin: 150px;
      display: flex;
      justify-content: center;

      button {
        width: auto;
        height: 50px;
        font-size: 20px;
      }
    }
  
`;
