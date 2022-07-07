import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';

function Router() {

  const baseURL = "http://localhost:3002";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={<Login
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/"
          element={<LandingPage
            baseURL={baseURL} 
            />}
        />
      </Routes>
    </BrowserRouter>
  )

}

export default Router;