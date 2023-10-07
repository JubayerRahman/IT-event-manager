import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Carrerpage from "./pages/CarrerPage/Carrerpage.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Login from "./pages/Login Page/LoginPage.jsx"
import Register from "./pages/Registerpage/Registerpage.jsx"
import ServiceDynamic from './pages/ServiceDynamic/ServiceDynamic.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Career",
        element:<Carrerpage/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Register",
        element:<Register/>
      },
      {
        loader: ()=> fetch("EventData.json"),
        path:"/:id",
        element:<ServiceDynamic/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
