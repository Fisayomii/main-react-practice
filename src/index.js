import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/global.css'
import SuccessPage from './pages/SuccessPage'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "success",
      element: <SuccessPage/>,
    },

    {
        path: "/",
        element: <App/>,
    },

  ]);

console.log(App)


ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root")
)
