import { Box, CircularProgress, Grid} from "@mui/material"
import Product from "./Product"
import { useState, useEffect } from 'react'
import _ from "lodash"
import { useParams } from "react-router"
import mockUserProducts from "../mock_api/mock_userproducts.json"

const OnlyUserProducts = (props) => {

    const baseURL = props.baseURL
    const [userProducts, setUserProducts] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const { userID } = useParams() //gets userID from current route

      setTimeout(() => {
        setUserProducts(mockUserProducts.userproducts);
      },2000)

    // useEffect(() => {
    //     let mounted = true
    //     setTimeout(() => {
    //         async function getProductsOfUserByID() {
    //             fetch(`${baseURL}/userproducts/${userID}`,{
    //                 method: "GET",
    //                 credentials: "include",
    //             }).then((res) => res.json())
    //             .then(
    //                 (result) =>{
    //                     if(mounted){
    //                         setIsLoaded(true)
    //                         setUserProducts(result)
    //                         console.log("result: "+result.name) // undefined..
    //                     }
    //                 },
    //                 (error) =>{
    //                     if(mounted){
    //                         setIsLoaded(true)
    //                         setError(error)
    //                     }
    //                 }
    //             )}
    //             getProductsOfUserByID()}, 2000)
    //     return () => (mounted = false) //cleanup function
    // }, [userProducts, props.baseURL])

    // if (error) {
    //     return <div>Error: {error.message}</div>
    // } else if (!isLoaded) {
    //   return(
    //     <div>
    //       <Box textAlign="center" mt={15}>
    //         <CircularProgress 
    //         centered
    //         sx={{ color: 'secondary.loading' }}/>
    //       </Box>
    //   </div>)
    // } else {
    return ( 
        <Grid container justify="center">
        {userProducts[0].components.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Box mt={12} ml={5} mr={5}>
                <Product product={product}/>
              {/* <Product product={product}/> */}
            </Box>
          </Grid>
        ))} 
      </Grid>
     )
    // }
}

export default OnlyUserProducts