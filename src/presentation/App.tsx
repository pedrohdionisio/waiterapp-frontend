import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from '../shared/styles/GlobalStyles';
import { defaultTheme } from '../shared/styles/themes/default';
import { AppRoutes } from '../shared/routes/index.routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
