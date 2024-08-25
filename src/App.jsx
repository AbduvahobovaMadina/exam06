import { useState } from "react"
import "./App.css"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom"
import Layout from "./pages/layout/Layout";
import Detail from "./pages/detail/Detail";
import Admin from "./pages/admin/Admin";
import Manage from "./pages/admin/Manage";
import Name from "./pages/admin/Name";
import Error from "./pages/erorr/Error"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/product/:id" element={<Detail/>} />
          <Route path='*' element={<Error/>}/>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="manage" element={<Manage />}></Route>
          <Route path="name" element={<Name />}></Route>
      </Route>
      </Routes>
      
    </>
  )
}

export default App
