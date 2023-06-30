import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background: ${({ theme }) => theme.COLORS.PINK_50};

        display: flex;
        align-items: center;
        padding: 0 124px;

       
        a {
            color: ${({ theme }) => theme.COLORS.PINK_10};
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0;
            gap: 8px;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
        }

        button {
            background: none;
            border: none;
            font-size: 17px;
            color: ${({ theme }) => theme.COLORS.PINK_10}
            
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;
    
    > div:nth-child(4) {
        margin-top: 24px;
    }

    > div:nth-child(5) {
        margin-bottom: 20px;
    }

`;

export const Avatar = styled.div`
    position: relative;
    margin: -123px auto 32px;
    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK_10};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_40};
        }
    }
`;