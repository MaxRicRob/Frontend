import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AllProducts from '../pages/AllProducts';

function Router() {

  const baseURL = "http://localhost:3002";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/products"
          element={<AllProducts
            baseURL={baseURL} 
            />}
        />
      </Routes>
    </BrowserRouter>
  )

}

export default Router;