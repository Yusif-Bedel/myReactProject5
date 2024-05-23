import { useEffect, useState } from 'react'
import './App.css'
import MainContext from './context/context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'

function App() {
const [data,setData]=useState([])
const router=createBrowserRouter(ROUTES)
useEffect(()=>{
  axios.get("http://localhost:4404/products").then(res=>{
    setData([...res.data])
    console.log(res.data)
  })
},[])
const contextData={
  data,setData
}
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}

export default App
