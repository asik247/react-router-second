import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Routs/Root.jsx'
import About from './Components/About/About.jsx'
import Hero from './Components/HeroArea/Hero.jsx'
import Users from './Components/Users/Users.jsx'
import Login from './Components/Loing/Login.jsx'

// router code start here;
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Hero },
      { path: 'about', Component: About },
      { path: 'login', Component: Login },

      {
        path: 'users',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
