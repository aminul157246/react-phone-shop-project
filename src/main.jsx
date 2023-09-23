import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {RouterProvider} from "react-router-dom";
import router from './Route/Routes';


// context api 
export const GlobalContext = createContext()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext.Provider value = 'I am Global Context '>
    <RouterProvider router={router} />
    </GlobalContext.Provider>
  </React.StrictMode>,
)
