import styled from 'styled-components'

// export const Container = styled.div`
//   svg {
//     color: ${({ theme }) => theme.COLORS.PINK_10};
//     width: 20px;
//     height: 20px;
//   }
// `

export const Container = styled.div`
  display: flex;
  justify-content: ${({ isBigSize }) => (isBigSize ? "center" : "start")};
  gap: 10px;
  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? "22px" : "14px")};
    color: ${({ theme }) => theme.COLORS.PINK_10};
  }
`;