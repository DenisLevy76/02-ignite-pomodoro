import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      border: none;
      box-sizing: border-box;
    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.colors['green-500']};
      border-radius: 4px;
    }

    body {
      background: ${theme.colors['gray-900']};
      color: ${theme.colors['gray-300']};
    }

    body,
    input,
    textarea,
    button {
      color: ${theme.colors['gray-100']};
      font-family: ${theme.type.fontFamily};
      font-weight: 400;
      font-size: 1rem;
      -webkit-font-smoothing: antialiased;
    }

    ul,
    ol {
      list-style: none;
    }
  `}
`
