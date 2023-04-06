import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop/Shop";

import Orders from "./Components/Orders/Orders";
import Inventory from "./Inventory/Inventory";
import Login from "./Components/Login/Login";
import Home from "./Components/Layouts/Home";
import cartProductsLoader from "./Components/Loaders/cartProductsLoader";
import Checkout from "./Components/checkout/Checkout";
const router =createBrowserRouter ([

  // {
  //   path: '/',
  //   Element: <Home></Home>,
  //   children:[
  //     {
  //       path:'/',
  //       element: <Shop></Shop>
  //     },
  //     {
  //       path:'orders',
  //       element: <Orders></Orders>
  //     },
  //     {
  //       path:'inventory',
  //       element: <Inventory></Inventory>
  //     },
  //     {
  //       path:'login',
  //       element: <Login></Login>
  //     },
  //   ]
  // }
  {
    path: '/',
    element: <Home></Home>,
    children:[{
      
              path:'/',
              element: <Shop></Shop>
            },
            {
                    path:'order',
                    element: <Orders></Orders>,
                    loader: cartProductsLoader
                  },
                  {
                    path:'inventory',
                    element: <Inventory></Inventory>
                  },
                  {
                    path:'login',
                    element: <Login></Login>
                  },
                  {
                    path:'checkout',
                    element: <Checkout></Checkout>
                  },

    ]
  }
 
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
