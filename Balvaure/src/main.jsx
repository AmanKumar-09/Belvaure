import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'
import Kids from './components/Kids.jsx'
import Homeandliving from './components/Homeandliving.jsx'
import Beauty from './components/Beauty.jsx'
import Studio from './components/Studio.jsx'
import Frontpage from './components/Frontpage.jsx'
import Login from './components/Login.jsx'
import Bag from './components/Bag.jsx'
import Wishlist from './components/Wishlist.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Frontpage/>
       },
       {
           path:'/login',
           element:<Login/>
       },
       {
         path:"/bag",
         element:<Bag/>
       },
       {
           path:'/wishlist',
           element:<Wishlist/>
       },
        {
           path:'/Men',
           element:<Men/>
        },
        {
          path:'/Women',
          element:<Women/>
        },
        {
          path:'/Kids',
          element:<Kids/>
        },
        {
          path:'/Home&living',
          element:<Homeandliving/>
        },
        {
          path:'/Beauty',
          element:<Beauty/>
        },
        {
          path:'/Studio',
          element:<Studio/>
        }
      ]

    }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}>

    </RouterProvider>
  
  </StrictMode>,
)
