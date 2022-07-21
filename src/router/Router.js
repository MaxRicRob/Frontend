import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AllProductsPage from '../pages/AllProductsPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import AllComponentsPage from '../pages/AllComponentsPage'
import ComponentDetailPage from '../pages/ComponentDetailPage'
import AllUserProductsPage from '../pages/AllUserProductsPage'
import UserProductDetailPage from '../pages/UserProductDetailPage'
import useAxios from "../hooks/useAxios"
import useGetComponents from '../hooks/useGetComponents'

function Router(props, {setIsLoggedIn}) {

  const baseURL = "http://localhost:8085"

  const [defaultProducts, setDefaultProducts] = useState([])
  
  const { response } = useAxios({
    method: 'GET',
    mode: 'cors',
    url: '/defaultProducts'
  })

  useEffect(() => {
    if(response !== null){
    setDefaultProducts(response)}
  },[response])

  const [defaultComponents, setDefaultComponents] = useState([])
  const { getComponentsResponse } = useGetComponents()

  useEffect(() => {
    if(getComponentsResponse!==null)
    setDefaultComponents(getComponentsResponse)
  },[getComponentsResponse])
  
  return (
    <BrowserRouter>
      <Routes>
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
          path="/"
          element={<AllProductsPage
            defaultProducts={defaultProducts}
            isLoggedIn={props.isLoggedIn}
            baseURL={baseURL} 
            />}
        />
        <Route
          exact
          path="/product/:id"
          element={<ProductDetailPage
            defaultProducts={defaultProducts}
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
            defaultComponents={defaultComponents}
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