import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box, Button, CircularProgress, Modal, Grid, TextField, Typography} from "@mui/material"
import UserProduct from "../components/UserProduct"
import { useState, useEffect} from 'react'
import _ from "lodash"
import { useParams } from "react-router"
import AddUserProduct from "../components/AddUserProduct"
import useDeleteProduct from "../hooks/useDeleteProduct"
import useGetUserProducts from "../hooks/useGetUserProducts"
import useAddProduct from "../hooks/useAddProduct"
import ComponentsListAdd from "../components/ComponentsListEdit"

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
}

const AllUserProductsPage = (props) => {

    const { id } = useParams() //gets userID from current route
    const componentName = 'allUserProducts'
    const [userProducts, setUserProducts] = useState([])
    const {getUserProductsResponse, getUserProductsError, getUserProductsLoading, getUserProducts} = useGetUserProducts()
    const {deleteResponse, deleteProduct} = useDeleteProduct()
    const {addProductResponse, addProduct} = useAddProduct()

    // get all user products
    useEffect(() => {
      getUserProducts(id)
    },[])
    useEffect(() => {
      if(getUserProductsResponse !== null)
        setUserProducts(getUserProductsResponse)
    },[getUserProductsResponse])

    //add user product
    const onAdd = (data) => {
      addProduct(data)
    }
    useEffect(() => {
      if(addProductResponse !== null)
        getUserProducts(id)
    },[addProductResponse])

    // delete user product
    const onDelete = (id) => {
      deleteProduct(id)
      getUserProducts(id)
    }

    useEffect(() => {
      if(deleteResponse !== null)
         getUserProducts(id)
    },[deleteResponse])    

    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    const [productName, setProductName] = useState()
    const [checkedForEditing, setCheckedForEditing] = useState([])
    
    const handleProductNameInputChange = (e) =>{
      const enteredText = e.target.value
      setProductName(enteredText)
    }

    // checked component of edit modal
    const [checkedComponents, setCheckedComponents] = useState([])
    const productUpdateData = {
      "name": productName,
      "components": checkedComponents
  }

    const onEdit = () => {
      handleOpenModal()
    }

    const onClickSubmitEdit = () => {
      //updateProduct(productUpdateData)
      handleCloseModal()
    }

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
                  <Grid item 
                  key={product.id} xs={12} sm={6} md={4} lg={4}>
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
                    <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title">
                    <Box sx={modalStyle}>
                        <Typography 
                        id="modal-modal-title" 
                        variant="h6" 
                        component="h2"
                        gutterBottom>
                            Edit Product:
                        </Typography>
                        <TextField
                        required
                        variant="standard"
                        label="New Name:"
                        type="text"
                        onChange={handleProductNameInputChange}
                        />
                        <Box mt={3}>
                            <Typography>
                                New components:
                            </Typography>
                            <ComponentsListAdd 
                            setCheckedComponents={setCheckedComponents}
                            product={product}/>
                            <Box mt={2}>
                                <Button
                                onClick={onClickSubmitEdit} 
                                variant="contained" 
                                color="success">
                                    Submit Changes</Button>
                            </Box>
                        </Box>
                    </Box>
                    </Modal>
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