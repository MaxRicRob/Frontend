import { Grid, Box, CircularProgress } from "@mui/material";
import Product from "./Product";
import { useState, useEffect } from 'react';
import _ from "lodash";

const AllProducts = (props) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let mounted = true;
        setTimeout(() => {
            async function getProducts() {
                fetch(`${props.baseURL}/products`,{
                    method: "GET",
                    credentials: "include",
                }).then((res) => res.json())
                .then(
                    (result) =>{
                        if(mounted){
                            setIsLoaded(true);
                            setProducts(result);
                        }
                    },
                    (error) =>{
                        if(mounted){
                            setIsLoaded(true);
                            setError(error);
                        }
                    }
                );}
                getProducts();}, 2000);
        return () => (mounted = false); //cleanup function
    }, [products, props.baseURL])

    // console.log(products)

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <CircularProgress/>
    } else {
    return(
        <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Box mt={10} ml={10}>
            <Product product={product}/>
            </Box>
          </Grid>
        ))} 
      </Grid>
    );}
}

export default AllProducts;