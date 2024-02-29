import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Comparison from "./pages/Comparison";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";





// localStorage.clear();

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/comparison", element: <Comparison/> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },
      // { path: "/products/:id", element: <Products /> },
      // { path: "/search", element: <Search /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;
