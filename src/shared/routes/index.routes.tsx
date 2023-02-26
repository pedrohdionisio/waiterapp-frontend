import { Route, Routes } from 'react-router-dom';

import { Dashboard } from 'presentation/pages/Dashboard/Dashboard.page';
import { History } from 'presentation/pages/History/History.page';
import { Home } from 'presentation/pages/Home/Home.page';
import { Login } from 'presentation/pages/Login/Login.page';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<Login />}
      />

      <Route
        path='/dashboard'
        element={<Dashboard />}
      >
        <Route
          path='home'
          element={<Home />}
        />
        <Route
          path='historico'
          element={<History />}
        />
      </Route>
    </Routes>
  );
}
