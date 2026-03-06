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
import UsersDetils from './Components/UsersDetils/UsersDetils.jsx'
import Post from './Components/Post/Post.jsx'
import PageNotFound from './Components/PageNotFound/PageNotFound.jsx'

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
      {
        path: 'users/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        Component: UsersDetils
      },
      {
        path:'post',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
        Component:Post
      },{
        path:'*',
        Component:PageNotFound
      }


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
