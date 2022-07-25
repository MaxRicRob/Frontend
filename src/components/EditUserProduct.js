import { Box, Button, Card, CardContent, IconButton, Modal, TextField, Typography} from "@mui/material"
import { useEffect, useState, useRef } from 'react'
import ComponentsList from './ComponentsList'

const style = {
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

const EditUserProduct = (props, {editUserProductRef}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [productName, setProductName] = useState()
    const [checkedComponents, setCheckedComponents] = useState([])

    const handleProductNameInputChange = (e) =>{
        const enteredText = e.target.value
        setProductName(enteredText)
    }

    editUserProductRef = useRef()

    useEffect(() => {
        editUserProductRef = editHandler()
    })

    const editHandler = () => {
        console.log("edit product")
    }

    return (
    <Modal
    open={open}
    // onClose={handleClose}
    aria-labelledby="modal-modal-title">
    <Box sx={style}>
        <Typography 
        id="modal-modal-title" 
        variant="h6" 
        component="h2"
        gutterBottom>
            Edit Product
        </Typography>
        <TextField
        required
        variant="standard"
        label="Name:"
        type="text"
        onChange={handleProductNameInputChange}
        />
        <Box mt={3}>
            <Typography>
                Choose components:
            </Typography>
            <ComponentsList 
            setCheckedComponents={setCheckedComponents}/>
            <Box mt={2}>
                <Button
                onClick={() => props.addProductHandler(data)} 
                variant="contained" 
                color="success">
                    Create Product</Button>
            </Box>
        </Box>
    </Box>
    </Modal>
    )
}

export default EditUserProduct