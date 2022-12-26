import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;
      color: ${theme.colors['gray-100']};
    }
  `}
`
export const HistoryList = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;
    max-height: 50vh;
    border-radius: 8px;

    > table {
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;

      th {
        background: ${theme.colors['gray-600']};
        padding: 1rem;
        text-align: left;
        color: ${theme.colors['gray-100']};
        font-size: 0.875rem;
        line-height: 1.6;
        white-space: nowrap;

        &:first-child {
          border-top-left-radius: 8px;
        }

        &:last-child {
          border-top-right-radius: 8px;
        }
      }

      td {
        background: ${theme.colors['gray-700']};
        padding: 1rem;
        text-align: left;
        color: ${theme.colors['gray-100']};
        font-size: 0.875rem;
        line-height: 1.6;
        border-top: 4px solid ${theme.colors['gray-800']};

        white-space: nowrap;
      }
    }
  `}
`

export const Status = styled.span<{ color: 'green' | 'yellow' | 'red' }>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: ${color === 'green'
        ? theme.colors['green-500']
        : color === 'yellow'
        ? theme.colors['yellow-500']
        : theme.colors['red-500']};
    }
  `}
`
