
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Men from '../containers/Men';
import Women from '../containers/Women';
import Contact from '../containers/Contact';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Layout from '../components/Layout';

export default function App() {
  return (
    <>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
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

