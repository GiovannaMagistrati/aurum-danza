import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import ExploreTalent from '../pages/ExploreTalent';
import Castings from '../pages/Castings';
import Login from '../pages/Login';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "talents",
        element: <ExploreTalent />,
      },
      {
        path: "castings",
        element: <Castings />,
      },
      {
        path: "about",
        element: <About />,
      },
      { 
        path: "*", 
        element: <NotFound />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  }
]);