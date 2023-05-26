import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import Blog from './components/Blog/Blog.jsx';
import MyToys from './components/MyToys/MyToys.jsx';
import AddToy from './components/AddToy/AddToy.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import ToyDetails from './components/ToyDetails/ToyDetails.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<PageNotFound></PageNotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path:'alltoys',
        element:<AllToys></AllToys>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'mytoys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'addtoy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'toydetails/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1480px] mx-auto'>
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  </div>,
)
