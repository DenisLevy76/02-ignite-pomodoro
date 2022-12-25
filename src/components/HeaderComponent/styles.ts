import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem;

    > nav > ul {
      display: flex;
      gap: 1rem;

      > li > a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors['gray-100']};

        width: 3rem;
        height: 3rem;

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        transition: all 0.2s ease-in-out;

        &:hover {
          border-bottom-color: ${theme.colors['green-500']};
        }

        &.active {
          color: ${theme.colors['green-500']};
        }
      }
    }
  `}
`
