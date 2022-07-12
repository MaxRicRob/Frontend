import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, CardActionArea, CardContent, IconButton, Typography} from "@mui/material"

const AddUserProduct = () => {
    
    return ( 
        <Card>
            <CardActionArea>
            <CardContent>
                <div>
                <Typography variant="h6">
                    Add new Product
                </Typography>
                <div style={{textAlign: 'right'}}>
                    <IconButton>
                        <AddCircleIcon/>
                    </IconButton>
                </div>
                </div>
            </CardContent>
            </CardActionArea>
        </Card>
     );
}
 
export default AddUserProduct;