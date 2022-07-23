import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box} from "@mui/material"
import React from "react"
import { useParams } from "react-router"
import Product from "../components/Product"

const ProductDetailPage = (props) => {

    const componentName = 'productDetail'
    const { id } = useParams() //gets productID from current url-parameter

    const product = props.defaultProducts[id]

    return ( 
        <div>
            <Header isLoggedIn={props.isLoggedIn} loggedUser={props.loggedUser}/>
            <Box mt={12} ml={10} mr={10}>
              <Product 
              key={product.id}
              baseURL={props.baseURL} 
              componentName={componentName}
              product={product}/>
            </Box>
            <Footer/>
        </div>
     )
    }
// }
 
export default ProductDetailPage