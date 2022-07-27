import Header from "../structure/Header";
import Footer from "../structure/Footer";
// import AllProducts from "../components/AllProducts";
import { Grid, Box, CircularProgress } from "@mui/material"
import Product from "../components/Product"
import { useState, useEffect } from 'react'
import _ from "lodash"
import useAxios from "../hooks/useAxios"

const AllProductsPage = (props) => {

    const componentName = 'allProducts'

    const [products, setProducts] = useState({__html: ""})
    const { response, loading, error } = useAxios({
      method: 'GET',
      mode: 'cors',
       headers: {   // tried different headers for CORS-problem with keycloak
      //   "Access-Control-Allow-Origin": "*",
      //   'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
         'Content-Type': 'application/json'
      },
      // credentials: 'include',
      url: '/allproducts'
    })

    useEffect(() => {
      if(response !== null)
        setProducts({__html: response})
    },[response])
    
    return(
        <div dangerouslySetInnerHTML={products}>
        </div>
    )
}

export default AllProductsPage;