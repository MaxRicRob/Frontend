import { Grid, Box, CircularProgress } from "@mui/material"
import Product from "./Product"
import { useState, useEffect } from 'react'
import _ from "lodash"
import useAxios from "../hooks/useAxios"

const AllProducts = (props) => {

    const componentName = 'allProducts'
    console.log(componentName)
    const [products, setProducts] = useState([])
    const { response, loading, error } = useAxios({
      method: 'GET',
      mode: 'cors',
      url: '/defaultProducts'
    })

    useEffect(() => {
      if(response !== null)
        setProducts(response)
    },[response])

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (loading) {
      return(
      <Box textAlign="center" mt={15}>
        <CircularProgress 
        centered
        sx={{ color: 'secondary.loading' }}/>
      </Box>
        )
    } else {
    return(
      <Grid container justify="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Box mt={12} ml={5} mr={5}>
              <Product baseURL={props.baseURL} product={product} componentName={componentName}/>
            </Box>
          </Grid>
        ))} 
      </Grid>
    )}
}

export default AllProducts