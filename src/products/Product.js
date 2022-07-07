import { Card, CardMedia, CardContent, CardActions, CardActionArea, Typography, Button } from "@mui/material";

const Product = ({product}) => {
    return(
        <Card>
            <CardActionArea>
                <CardMedia
                title="Test"/>
                    <CardContent>
                        <div>
                        <Typography variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h6">
                          Price
                        </Typography>
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