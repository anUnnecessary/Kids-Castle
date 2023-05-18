import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import Blogs from './Components/Blogs/Blogs'

import Info from './Components/Info/Info'



function App() {


  return (
   <div className='text-gray-600 text-4xl'>
    <Header></Header>
    <Routes>
      <Route
      path='/' element={<Home></Home>}></Route>
      <Route
      path='/login' element={<Login></Login>}></Route>
      <Route
      path='/register' element={<Register></Register>}></Route>
      <Route
      path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route
      path='/info' element={<Info></Info>}></Route>
    </Routes>

   
   </div> 
  )
}

export default App
