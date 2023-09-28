import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Pages/Shop";
import ErrorPage from "./Pages/ErrorPage";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart"

export default function Router() {

  const router = createBrowserRouter([
      {
      path: "/",
      element: <Shop />,
      errorElement: <ErrorPage />
    },
    {
      path: "details/:item",
      element: <Details />
    },
    {
      path: "cart",
      element:  <Cart />
    }
    ])
    return <RouterProvider router={router} />
  }
