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
import useGetUserProducts from '../hooks/useGetUserProducts'

function Router() {

  const baseURL = "http://localhost:8085"
  const [loggedUser, setLoggedUser] = useState("bob")   //change later
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const { getUserProductsResponse, getUserProducts} = useGetUserProducts()
  const [userProducts, setUserProducts] = useState([])

  useEffect(() => {
    getUserProducts(loggedUser)
  },[])

  useEffect(()=>{
    if(getUserProductsResponse !== null)
    setUserProducts(getUserProductsResponse)
  },[getUserProductsResponse])

  const defaultProps = {
    setIsLoggedIn,
    baseURL,
    loggedUser, 
    defaultProducts,
    defaultComponents,
    isLoggedIn
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginPage {...defaultProps} />}
        />
        <Route
          exact
          path="/allproducts"
          element={<AllProductsPage {...defaultProps} />}
        />
        <Route
          exact
          path="/product/:id"
          element={<ProductDetailPage {...defaultProps} />}
        />
        <Route
          exact
          path="/components"
          element={<AllComponentsPage {...defaultProps} />}
        />
        <Route
          exact
          path="/component/:id"
          element={<ComponentDetailPage {...defaultProps} />}
        />
        <Route
          exact
          path="/userproducts/:id"
          element={<AllUserProductsPage {...defaultProps} 
          userProducts={userProducts}/>}
        />
        <Route
          exact
          path="/userproduct/:id"
          element={<UserProductDetailPage {...defaultProps} 
          userProducts={userProducts}/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router