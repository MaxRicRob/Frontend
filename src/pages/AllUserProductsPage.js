import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box, CircularProgress, Grid} from "@mui/material"
import UserProduct from "../components/UserProduct"
import { useState, useEffect } from 'react'
import _ from "lodash"
import { useParams } from "react-router"
import AddUserProduct from "../components/AddUserProduct"
import useAxios from "../hooks/useAxios"

const AllUserProductsPage = (props) => {

    const { id } = useParams() //gets userID from current route
    const componentName = 'allUserProducts'

    const [userProducts, setUserProducts] = useState([])
    const { response, loading, error } = useAxios({
      method: 'GET',
      mode: 'cors',
      url: '/products/'+id
    })

    useEffect(() => {
      if(response !== null)
        setUserProducts(response)
    },[response])

    return(
        <div>
           <Header isLoggedIn={props.isLoggedIn} loggedUser={props.loggedUser}/>
           { (error)?(
                  <div>Error: {error.message}</div>
                  ) : (loading)? (
                  <Box textAlign="center" mt={15}>
                    <CircularProgress 
                    sx={{ color: 'secondary.loading' }}/>
                  </Box>
               ) : (
            <Grid container justify="center">
                {userProducts.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                    <Box mt={12} ml={5} mr={5}>
                       <UserProduct product={product} componentName={componentName}/>
                    </Box>
                  </Grid>
                ))}
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box mt={12} ml={5} mr={5}>
                <AddUserProduct/>
              </Box>
            </Grid> 
            </Grid> 
            )}
           <Footer/>
        </div>
    )    
}

export default AllUserProductsPage