import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Card, CardContent, IconButton, Modal, TextField, Typography} from "@mui/material"
import { useState } from 'react';
import ComponentsList from './ComponentsList';

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
  };

const AddUserProduct = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <Card>
            <CardContent>
                <div>
                <Typography variant="h6" onClick={handleOpen}>
                    Add new Product
                </Typography>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title">
                    <Box sx={style}>
                        <Typography 
                        id="modal-modal-title" 
                        variant="h6" 
                        component="h2"
                        gutterBottom>
                            Add a New Product
                        </Typography>
                        <TextField
                        variant="standard"
                        label="Name:"
                        type="text"
                        />
                        <Box mt={3}>
                            <Typography>
                                Choose components:
                            </Typography>
                            <ComponentsList/>
                            <Box mt={2}>
                                <Button 
                                variant="contained" 
                                color="success">
                                    Create Product</Button>
                            </Box>
                        </Box>
                    </Box>
                    </Modal>
                <div style={{textAlign: 'right'}}>
                    <IconButton onClick={handleOpen}>
                        <AddCircleIcon/>
                    </IconButton>
                </div>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default AddUserProduct;