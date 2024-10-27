import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Travel from './components/Travel'
import Sports from './components/Sports'
import Post from './components/Post'

function App() {
 const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Skills/></>
    },
    {
      path:"/Travel",
      element:<><Navbar/><Travel/></>
    },
    {
      path:"/Sports",
      element:<><Navbar/><Sports/></>
    },
    {
      path:"/Post",
      element:<><Navbar/><Post/></>


    },





 ])

  return (
    <>
     
     <RouterProvider router={router} />
     
    </>
  )
}

export default App
