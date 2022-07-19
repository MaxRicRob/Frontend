import { Grid, Box, CircularProgress } from "@mui/material"
import Product from "./Product"
import { useState, useEffect } from 'react'
import _ from "lodash"
import useAxios from "../hooks/useAxios"

const AllProducts = (props) => {

    // const products = [
    //   {
    //     "id": "463cd4dc-1515-46d4-8d47-022359633183",
    //     "name": "Organic Bucket",
    //     "components": "1,3",
    //     "description": "super nice organic bucket"
    //   },
    //   {
    //     "id": "8ca5ce3f-0c2e-41f0-ada4-cf160d303f56",
    //     "name": "Cool Summer",
    //     "components": "1,3",
    //     "description": "super nice bucket for cool summer"
    //   },
    //   {
    //     "id": "01d93d1e-03f6-48a1-9685-bdf53fcc4a10",
    //     "name": "Colorful Bucket",
    //     "components": "1,2,3",
    //     "description": "super nice bucket with plenty of colors"
    //   }
    // ]

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
              <Product baseURL={props.baseURL} product={product}/>
            </Box>
          </Grid>
        ))} 
      </Grid>
    )}
}

export default AllProducts