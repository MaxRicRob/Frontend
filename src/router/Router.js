import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import ProductDetail from '../pages/ProductDetail';
import ComponentsPage from '../pages/ComponentsPage';
import ComponentDetail from '../pages/ComponentDetail';

function Router(props, {setIsLoggedIn}) {

  const baseURL = "http://localhost:3002";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/login"
          element={<Login
            setIsLoggedIn={setIsLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/product/:id"
          element={<ProductDetail
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/components"
          element={<ComponentsPage
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/component/:id"
          element={<ComponentDetail
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
      </Routes>
    </BrowserRouter>
  )

}

export default Router;