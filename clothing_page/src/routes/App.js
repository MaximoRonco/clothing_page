
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Men from '../containers/Men';
import Women from '../containers/Women';
import Contact from '../containers/Contact';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/men' element={<Men/>}></Route>
              <Route path='/women' element={<Women/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

