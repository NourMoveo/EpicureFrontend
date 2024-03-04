import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, RestaurantsPage ,ChefsPage} from '../pages'; // Import RestaurantDetails component
import { Navbar, Footer, RestaurantDetails } from '../components';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/chefs',
        element: <ChefsPage/>
      },
      {
        path: '/restaurants',
        element: <RestaurantsPage />
      },
      {
        path: '/restaurant/:title' ,
        element: < RestaurantDetails />
      },
    ]
  }
]);


export default router;
