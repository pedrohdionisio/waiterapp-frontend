import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import store from 'data/store/store';

import { AppRoutes } from 'shared/routes/index.routes';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import { defaultTheme } from 'shared/styles/themes/default';

import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools
            initialIsOpen={false}
            position='bottom-right'
          />
          <BrowserRouter>
            <ToastContainer position='top-center' />
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
