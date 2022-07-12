import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ComponentsPage from '../pages/ComponentsPage'
import ComponentDetailPage from '../pages/ComponentDetailPage'
import UserProductsPage from '../pages/UserProductsPage'
import UserProductDetailPage from '../pages/UserProductDetailPage'

function Router(props, {setIsLoggedIn}) {

  const baseURL = "http://localhost:3002"

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<ProductsPage
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/login"
          element={<LoginPage
            setIsLoggedIn={setIsLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/product/:id"
          element={<ProductDetailPage
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
          element={<ComponentDetailPage
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/userproducts/:id"
          element={<UserProductsPage
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/userproduct/:id"
          element={<UserProductDetailPage
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
      </Routes>
    </BrowserRouter>
  )

}

export default Router