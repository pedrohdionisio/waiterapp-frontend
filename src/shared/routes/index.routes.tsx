import { Route, Routes } from 'react-router-dom';

import { Dashboard } from 'presentation/pages/Dashboard/Dashboard.page';
import { Home } from 'presentation/pages/Home/Home.page';
import { Login } from 'presentation/pages/Login/Login.page';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="historico" element={<h1>Histórico</h1>} />
      </Route>
    </Routes>
  );
}
