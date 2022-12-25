import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;
`

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border-bottom: 1px solid ${theme.colors['gray-500']};
    padding: 0.5rem 0.875rem;

    &::placeholder {
      color: ${theme.colors['gray-500']};
    }

    &:focus {
      box-shadow: none;
      border-color: ${theme.colors['green-500']};
    }
  `}
`

export const TaskInput = styled(Input)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesInput = styled(Input)`
  width: 4rem;
  padding: 0.5rem 0.2rem;
`

export const FormContainer = styled.form`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
    > fieldset {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;

      color: ${theme.colors['gray-100']};
      font-size: 1.125rem;
      font-weight: bold;

      > label {
        cursor: text;
      }

      > input {
      }
    }
  `}
`

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
export const StartTimerButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background: ${theme.colors['green-500']};
    padding: 1rem 0;
    width: 100%;
    max-width: 704px;
    color: ${theme.colors['gray-100']};
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.15s ease-out;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: ${theme.colors['green-700']};
    }
  `}
`
