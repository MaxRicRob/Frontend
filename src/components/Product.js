import { Card, CardContent, CardActions, CardActionArea, Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router';

const Product = ({product}) => {
    
    let navigate = useNavigate();

    return(
        <Card>
            <CardActionArea onClick={() => {navigate(`/product/${product.id}`)}}>
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
            <CardActions disableSpacing>
                <Button>Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default Product;