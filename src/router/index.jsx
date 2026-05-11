import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import ExploreTalent from '../pages/ExploreTalent';
import Castings from '../pages/Castings'; // ¡Aprovechamos para sumar Castings!

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
    ],
  },
]);