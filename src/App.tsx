import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <h1>test</h1>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
};
