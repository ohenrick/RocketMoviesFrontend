import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_10};

    display: flex;
    
    padding: 0 123px;

    > h1 {
      display: flex;
      align-items: center;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK_10};
      font-weight: 700;
      margin-right: 90px;
    }
`;

export const Profile = styled.div`
    width: 198px;
    height: 68px;
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 30px;
    margin-left: 64px;

    > div {
        display: flex;
        flex-direction: column;
        text-align: end;
        font-size: 14px;
        line-height: 24px;
        flex: none;

        strong {
            color: ${({ theme }) => theme.COLORS.COLOR_GRAY1};
            font-weight: 700;
            margin-bottom: 2px;
        }

        span {
            color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
        }
    }
`;

export const ToProfile = styled(Link)`
    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-right: 196px;
    }
`;