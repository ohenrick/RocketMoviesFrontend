import styled from "styled-components";
import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_10};
    font-weight: 700;
    margin-top: 20px;
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY1};
    
    margin-top: 48px;
    margin-bottom: 35px;

  }
  
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
  }

  .InputR1 {
    margin-top: -20px;
  }
  .InputR2 {
    margin-top: -20px;
  }
  .InputR3 {
    margin-top: -20px;
  }

  > button:first-of-type {
    margin-bottom: 42px;
    margin-top: 24px;
  }

  a {
    align-items: center;
    text-align: center;
    gap: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK_10};
    margin-top: 20px;

    > svg {
      margin-right: 8px;
    }
  }

  
`;


export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.5);
`;