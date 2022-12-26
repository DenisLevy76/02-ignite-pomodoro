import styled, { css } from 'styled-components'

export const TimerContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    > span {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 2.5rem 1rem;

      background: ${theme.colors['gray-700']};
      border-radius: 8px;

      font-family: 'Roboto mono', monospace;
      font-weight: 700;
      font-size: 10rem;
      line-height: 80%;

      color: ${theme.colors['gray-100']};
    }
  `}
`

export const Separator = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2.5rem 1rem;

    background: transparent;
    border-radius: 8px;

    font-family: 'Roboto mono', monospace;
    font-weight: 700;
    font-size: 10rem;
    line-height: 80%;
    color: ${theme.colors['green-500']};
  `}
`
