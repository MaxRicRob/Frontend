import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box, Card, CardContent, CircularProgress, Typography} from "@mui/material"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import UserProduct from "../components/UserProduct"
import useGetUserProducts from "../hooks/useGetUserProducts"

const UserProductDetailPage = (props) => {

    const componentName = 'userProductDetail'
    const [product, setProduct] = useState([])
    const { id } = useParams() //gets productID from current url-parameter
    const [userProducts, setUserProducts] = useState([])
    const {getUserProductsResponse, getUserProductsError, getUserProductsLoading, getUserProducts} = useGetUserProducts()
  
    // get all user products
    useEffect(() => {
        getUserProducts(props.loggedUser)
    },[])
    useEffect(() => {
      if(getUserProductsResponse !== null){
        setUserProducts(getUserProductsResponse)
        const userProductToFind = userProducts.find(product => product.id === id)
        setProduct(userProductToFind)
        }
    },[getUserProductsResponse])
    
    return ( 
        <div>
            <Header isLoggedIn={props.isLoggedIn} loggedUser={props.loggedUser}/>
            {(getUserProductsError)?(
                <div>Error: {getUserProductsError.message}</div>
                ) : (getUserProductsLoading)? (
                    <Box textAlign="center" mt={15}>
                      <CircularProgress 
                      sx={{ color: 'secondary.loading' }}/>
                    </Box>
                ) : (product !== undefined)? (
            <Box>
                <UserProduct
                 key={product.id}
                 product={product}
                 baseURL={props.baseURL} 
                 componentName={componentName}
                />
            </Box>) : <></>}
            <Footer/>
        </div>
     )
    // }
}
 
export default UserProductDetailPage