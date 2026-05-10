import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import ExploreTalent from './pages/ExploreTalent';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Aquí vive el Navbar y el Footer
    children: [
      {
        index: true, // Esto indica que es la página por defecto (Home)
        element: <Home />,
      },
      {
        path: "talents", // Se convierte en /talents
        element: <ExploreTalent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);