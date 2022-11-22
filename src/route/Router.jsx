import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout';
import Home from '../pages/products';
import Cost from '../pages/Cost';
import ProductDetail from '../pages/ProductDetail';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/products/:productId' element={ <ProductDetail/>}/>
                <Route path='/cost' element={ <Cost/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
