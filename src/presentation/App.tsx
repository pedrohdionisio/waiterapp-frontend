import { ThemeProvider } from 'styled-components';

import { Login } from './pages/Login/Login.page';

import { GlobalStyles } from '../shared/styles/GlobalStyles';
import { defaultTheme } from '../shared/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  );
}

export default App;
