import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Card, CardActionArea, CardContent, IconButton, Modal, Typography} from "@mui/material"
import { useState } from 'react';

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
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            New Product
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Product Infos coming here
                        </Typography>
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