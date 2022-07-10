import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import ProductDetail from '../pages/ProductDetail';

function Router() {

  const baseURL = "http://localhost:3002";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/login"
          element={<Login
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/product/:id"
          element={<ProductDetail
            baseURL={baseURL} 
            />}
        />
      </Routes>
    </BrowserRouter>
  )

}

export default Router;