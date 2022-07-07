import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material";

const Product = () => {
    return(
        <Card>
            <CardMedia
            title="Test"/>
                <CardContent>
                    <div>
                      <Typography variant="h5" gutterBottom>
                        Name
                      </Typography>
                      <Typography variant="h5">
                        Price
                      </Typography>
                    </div>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >Description
                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
            <IconButton
            aria-label="Add to Cart"
            >
            </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;