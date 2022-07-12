import { Card, CardContent, CardActionArea, Typography } from "@mui/material"
import { useNavigate } from 'react-router'

const UserProduct = ({product}) => {
    
    let navigate = useNavigate()

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
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >Description
                        </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default UserProduct