import { ThemeProvider } from 'styled-components'
import { RoutesPage } from './pages/RoutesPage'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

import { BrowserRouter } from 'react-router-dom'
import { CycleContextProvider } from './contexts/CycleContext'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CycleContextProvider>
          <RoutesPage />
          <GlobalStyles />
        </CycleContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
