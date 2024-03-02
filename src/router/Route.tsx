import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, RestaurantsPage } from '../pages';
import { Navbar ,Footer} from '../components';

import { Outlet } from "react-router-dom";

function Layout() {
  return (
      <>
        <Navbar/>
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [  
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/restaurants',
        element: <RestaurantsPage/>
      },
    ]
  }
])

export default router;
