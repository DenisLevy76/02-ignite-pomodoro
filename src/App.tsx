import { ThemeProvider } from 'styled-components'
import { RoutesPage } from './pages/RoutesPage'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <RoutesPage />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}
