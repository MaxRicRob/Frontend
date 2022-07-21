import { Box, CircularProgress, Grid} from "@mui/material"
import UserProduct from "./UserProduct"
import { useState, useEffect } from 'react'
import _ from "lodash"
import { useParams } from "react-router"
import mockUserProducts from "../mock_api/mock_userproducts.json"
import AddUserProduct from "./AddUserProduct"

const AllUserProducts = (props) => {
    const baseURL = props.baseURL
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams() //gets userID from current route

    const filteredUserProducts = mockUserProducts.userproducts.filter(userProducts => userProducts.id === id);
    console.log("userProducts: "+filteredUserProducts)

    // if (error) {
    //     return <div>Error: {error.message}</div>
    // } else if (!isLoaded) {
    //   return(
    //     <div>
    //       <Box textAlign="center" mt={15}>
    //         <CircularProgress 
    //         sx={{ color: 'secondary.loading' }}/>
    //       </Box>
    //   </div>)
    // } else {
    return ( 
        <Grid container justify="center">
        {filteredUserProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Box mt={12} ml={5} mr={5}>
               <UserProduct product={product}/>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box mt={12} ml={5} mr={5}>
            <AddUserProduct/>
          </Box>
        </Grid> 
      </Grid>
     )
    // }
}

export default AllUserProducts