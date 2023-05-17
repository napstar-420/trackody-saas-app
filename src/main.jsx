import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './css/index.css';
import Login from './pages/authentication/login';
import ErrorPage from './pages/error/index';
import SignUp from './pages/authentication/signup';
import ForgotPassword from './pages/authentication/forgotPassword';
import AdminRoot from './pages/admin/root.jsx';
import AdminDashboard from './pages/admin/dashboard.jsx'
import ThemeProvider from './themeProvider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorPage />}>
      <Route index element={<Login />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='*' element={<ErrorPage />} />
      <Route path='admin' element={<AdminRoot />}>
        <Route index element={<AdminDashboard />} />
        <Route path='*' element={<div>Page not found</div>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
