import React from 'react'
import ReactDOM from 'react-dom/client'
import { Front } from './Front'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Services } from './services';
import { Contact } from './contact';
import './index.css'
import { Feedback } from './feedback';
import { Facilities } from './facilities';
import { Catalog } from './catalog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Front/>,
  },
  {
    path: "catalog",
    element: <Catalog/>,
    children:[
      {path:"services",element: <Services/>},
      {path:"facilities",element:<Facilities/>},
      {path:"feedback",element:<Feedback/>},
      {path:"contact",element:<Contact/>}
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
   </React.StrictMode>,
)
