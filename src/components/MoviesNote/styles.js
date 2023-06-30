import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 222px;
  background-color: ${({ theme }) => theme.COLORS.PINK_50};

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
  }

  > p {
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
    text-align: justify;

    margin-block: 15px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
  } 

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;