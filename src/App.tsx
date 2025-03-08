import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';

import { action as checkoutAction } from './components/CheckoutForm';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as landingLoader } from './pages/Landing';
import { action as loginAction } from './pages/Login';
import { loader as ordersLoader } from './pages/Orders';
import { loader as productsLoader } from './pages/Products';
import { action as registerAction } from './pages/Register';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { store } from './store';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader,
        },
        {
          path: 'products',
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: productsLoader,
        },
        {
          path: 'products/:id',
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader,
        },
        {
          path: 'cart',
          element: <Cart />,
          errorElement: <ErrorElement />,
        },
        {
          path: 'about',
          element: <About />,
          errorElement: <ErrorElement />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
          errorElement: <ErrorElement />,
          loader: checkoutLoader(store),
          action: checkoutAction(store),
        },
        {
          path: 'orders',
          element: <Orders />,
          errorElement: <ErrorElement />,
          loader: ordersLoader(store),
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
      action: registerAction,
    },
  ],
  {
    basename: '/store',
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
