import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box, CircularProgress, Grid} from "@mui/material"
import UserProduct from "../components/UserProduct"
import { useState, useEffect, useRef, createRef } from 'react'
import _ from "lodash"
import { useParams } from "react-router"
import AddUserProduct from "../components/AddUserProduct"
import useDeleteProduct from "../hooks/useDeleteProduct"
import useGetUserProducts from "../hooks/useGetUserProducts"
import useAddProduct from "../hooks/useAddProduct"
import EditUserProduct from "../components/EditUserProduct"

const AllUserProductsPage = (props) => {

    const { id } = useParams() //gets userID from current route
    const componentName = 'allUserProducts'
    const [userProducts, setUserProducts] = useState([])
    const {getUserProductsResponse, getUserProductsError, getUserProductsLoading, getUserProducts} = useGetUserProducts()
    const {deleteResponse, deleteProduct} = useDeleteProduct()
    const {addProductResponse, addProduct} = useAddProduct()

    useEffect(() => {
      getUserProducts(id)
    },[])
    
    useEffect(() => {
      if(getUserProductsResponse !== null)
        setUserProducts(getUserProductsResponse)
    },[getUserProductsResponse])

    const onAdd = (data) => {
      addProduct(data)
    }

    useEffect(() => {
      if(addProductResponse !== null)
        getUserProducts(id)
    },[addProductResponse])

    const editUserProductRef = createRef()

    const onEdit = () => {
      editUserProductRef.current()
    }

    const onDelete = (id) => {
      deleteProduct(id)
      getUserProducts(id)
    }

    useEffect(() => {
      if(deleteResponse !== null)
        getUserProducts(id)
    },[deleteResponse])

    return(
        <div>
           <Header isLoggedIn={props.isLoggedIn} loggedUser={props.loggedUser}/>
           { (getUserProductsError)?(
                  <div>Error: {error.message}</div>
                  ) : (getUserProductsLoading)? (
                  <Box textAlign="center" mt={15}>
                    <CircularProgress 
                    sx={{ color: 'secondary.loading' }}/>
                  </Box>
               ) : (
            <Grid container justify="center">
                {userProducts.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                    <Box mt={12} ml={5} mr={5}>
                       <UserProduct 
                       key={product.id} 
                       product={product} 
                       componentName={componentName}  
                       baseURL={props.baseURL}
                       deleteButtonHandler={onDelete}
                       editButtonHandler={onEdit}
                       />
                    </Box>
                    <EditUserProduct
                    key={product.id}
                    product={product}
                    ref={editUserProductRef}/>
                  </Grid>
                ))}
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box mt={12} ml={5} mr={5}>
                <AddUserProduct 
                baseURL={props.baseURL} 
                user={id} 
                addProductHandler={onAdd}/>
              </Box>
            </Grid> 
            </Grid> 
            )} 
           <Footer/>
        </div>
    )    
}

export default AllUserProductsPage