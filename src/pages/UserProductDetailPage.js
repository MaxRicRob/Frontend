import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box, Card, CardContent, CircularProgress, Typography} from "@mui/material"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import UserProduct from "../components/UserProduct"

const UserProductDetailPage = (props) => {

    const componentName = 'userProductDetail'
    const [product, setProduct] = useState([])
    const { id } = useParams() //gets productID from current url-parameter
    
    return ( 
        <div>
            <Header isLoggedIn={props.isLoggedIn} loggedUser={props.loggedUser}/>
            <Box>
                <UserProduct
                 key={product.id}
                 baseURL={props.baseURL} 
                 componentName={componentName}
                 product={product}
                />
            </Box>
            <Footer/>
        </div>
     )
    // }
}
 
export default UserProductDetailPage