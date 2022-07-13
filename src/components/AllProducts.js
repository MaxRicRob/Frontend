import { Grid, Box, CircularProgress } from "@mui/material"
import Product from "./Product"
import { useState, useEffect } from 'react'
import _ from "lodash"
import useAxios from "../hooks/useAxios"

const AllProducts = (props) => {

    const [products, setProducts] = useState([])
    const { response, loading, error } = useAxios({
      method: 'get',
      url: `${props.baseURL}/products`
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
              <Product product={product}/>
            </Box>
          </Grid>
        ))} 
      </Grid>
    )}
}

export default AllProducts