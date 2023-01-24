import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyles } from '../shared/styles/GlobalStyles';
import { defaultTheme } from '../shared/styles/themes/default';
import { AppRoutes } from '../shared/routes/index.routes';

import store from '../data/store/store';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer position="top-center" />
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
