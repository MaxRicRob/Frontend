import { Card, CardContent, CardActionArea, IconButton, Typography } from "@mui/material"
import { useNavigate } from 'react-router'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

const UserProduct = ({product}) => {
    
    let navigate = useNavigate()

    const editButtonHandler = (e) => {
        //edit user product
    }

    const deleteButtonHandler = (e) => {
        //delete user product
    }

    return(
        <Card>
            <CardActionArea onClick={() => {navigate(`/userproduct/${product.id}`)}}>
                    <CardContent>
                        <div>
                        <Typography variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                            <div style={{textAlign: 'right'}}>
                        <Typography variant="h6">
                          Price
                        </Typography>
                            </div>
                        </div>
                        <div>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >Description
                        </Typography>
                        <div style={{textAlign: 'right'}}>
                            <IconButton>
                                <EditIcon onClick={editButtonHandler}/>
                            </IconButton>
                            <IconButton>
                                <DeleteIcon onClick={deleteButtonHandler}/>
                            </IconButton>
                        </div>
                        </div>
                    </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default UserProduct