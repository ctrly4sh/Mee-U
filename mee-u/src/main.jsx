import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Call from './components/Call.jsx'
import Layout from './Layout.jsx'

const customRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/call' element={<Call />} />
      <Route path='/home' element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={customRoute} />
  </React.StrictMode>,
)
