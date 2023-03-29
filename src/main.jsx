import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Login from './pages/login';
import ErrorPage from './errorPage';
import SignUp from './pages/signup.jsx';
import ForgotPassword from './pages/forgotPassword';
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
