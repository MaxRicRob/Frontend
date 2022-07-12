import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AllProductsPage from '../pages/AllProductsPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import AllComponentsPage from '../pages/AllComponentsPage'
import ComponentDetailPage from '../pages/ComponentDetailPage'
import AllUserProductsPage from '../pages/AllUserProductsPage'
import UserProductDetailPage from '../pages/UserProductDetailPage'

function Router(props, {setIsLoggedIn}) {

  const baseURL = "http://localhost:3002"

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<AllProductsPage
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
          element={<AllComponentsPage
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
          element={<AllUserProductsPage
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