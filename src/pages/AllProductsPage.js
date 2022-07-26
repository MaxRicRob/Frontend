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

    const [products, setProducts] = useState([])
    const { response, loading, error } = useAxios({
      method: 'GET',
      mode: 'cors',
      // headers: {   // tried different headers for CORS-problem with keycloak
      //   "Access-Control-Allow-Origin": "*",
      //   'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
        // 'Content-Type': 'application/json'
      // },
      // credentials: 'include',
      url: '/defaultProducts'
    })

    useEffect(() => {
      if(response !== null)
        setProducts(response)
    },[response])
    
    return(
        <div>
           <Header isLoggedIn={props.isLoggedIn} loggedUser={props.loggedUser}/>
            {(error)?(
                <div>Error: {error.message}</div>
                ) : (loading)? (
                    <Box textAlign="center" mt={15}>
                      <CircularProgress 
                      sx={{ color: 'secondary.loading' }}/>
                    </Box>
                ) : (
                    <Grid container justify="center">
                      {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                          <Box mt={12} ml={5} mr={5}>
                            <Product 
                            key={product.id} 
                            baseURL={props.baseURL}
                            product={product} 
                            componentName={componentName}/>
                          </Box>
                        </Grid>
                      ))} 
                    </Grid>
                  )}
           <Footer/>
        </div>
    )
}

export default AllProductsPage;