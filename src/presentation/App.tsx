import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import { ReactQueryDevtools } from 'react-query/devtools';

import store from '../data/store/store';

import { GlobalStyles } from '../shared/styles/GlobalStyles';
import { defaultTheme } from '../shared/styles/themes/default';
import { AppRoutes } from '../shared/routes/index.routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <BrowserRouter>
            <ToastContainer position="top-center" />
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
