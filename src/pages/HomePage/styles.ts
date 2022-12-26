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
export const ButtonComponent = styled.button`
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

export const StartTimerButton = styled(ButtonComponent)`
  ${({ theme }) => css`
    background: ${theme.colors['green-500']};

    &:hover:not(:disabled) {
      background: ${theme.colors['green-700']};
    }
  `}
`

export const CancelButton = styled(ButtonComponent)`
  ${({ theme }) => css`
    background: ${theme.colors['red-500']};

    &:hover:not(:disabled) {
      background: ${theme.colors['red-700']};
    }
  `}
`
