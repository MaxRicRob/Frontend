import { Grid, Box } from "@mui/material";
import Product from "./Product";

const AllProducts = () => {
    return(
        <Grid container justify="center" spacing={4}>
        {/* {products.map((product) => ( */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box mt={10} ml={10}>
            <Product/>
            </Box>
          </Grid>
        {/* ))} */}
      </Grid>
    )
}

export default AllProducts;