import { Box, Card, CardContent, CardActionArea, IconButton, Typography, Container } from "@mui/material"
import { useNavigate } from 'react-router'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

const UserProduct = (props) => {
    
    let navigate = useNavigate()

    const editButtonHandler = (e) => {
        //edit user product
    }

    const deleteButtonHandler = (e) => {
        //delete user product
    }

    return(
        <Container>
        { (props.componentName === 'allUserProducts') ?
        (<Card>
            <CardActionArea onClick={() => {navigate(`/userproduct/${props.product.id}`)}}>
                    <CardContent>
                        <Box>
                        <Typography variant="h6" gutterBottom>
                            {props.product.name}
                        </Typography>
                            <Box sx={{textAlign: 'right'}}>
                        <Typography variant="h6">
                          Price
                        </Typography>
                            </Box>
                        </Box>
                        <Box>
                        <Box style={{textAlign: 'right'}}>
                            <IconButton onClick={editButtonHandler}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={deleteButtonHandler}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                        </Box>
                    </CardContent>
            </CardActionArea>
        </Card>
        ) : (props.componentName === 'userProductDetail') ? 
        (<Box mt={12} ml={10} mr={10}>
                <Card>
                    <CardContent>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            Picture
                        <Typography variant="h5" gutterBottom>
                            {props.product.name}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'right'}}>
                        <Typography variant="body1" gutterBottom>
                            {props.product.description}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'left'}}>
                        <Typography variant="body1" gutterBottom>
                            Product Components: x, y, z
                        </Typography>
                        <Typography variant="h6">
                            Price
                        </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Box>) 
            : <></>
        }
        </Container>
    )
}

export default UserProduct