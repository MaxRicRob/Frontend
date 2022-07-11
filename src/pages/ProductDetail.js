import Header from "../structure/Header";
import Footer from "../structure/Footer";
import { 
    Box, 
    Card, 
    CardContent, 
    CircularProgress, 
    Typography} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const ProductDetail = (props) => {
    const baseURL = props.baseURL;

    const [product, setProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);    
    const [error, setError] = useState(null);

    const { id } = useParams(); //gets id from current route

    useEffect(() => {
        let mounted = true;
        setTimeout(() => {
          async function getProduct() {
            fetch(`${baseURL}/products/${id}`, {
              method: "GET",
              credentials: "include",
            })
              .then((res) => res.json())
              .then(
                (result) => {
                  if (mounted) {
                    setIsLoaded(true);
                    setProduct(result);
                  }
                },
                (error) => {
                  if (mounted) {
                    setIsLoaded(true);
                    setError(error);
                  }
                }
              );
          }; 
        getProduct();},2000);
        return () => (mounted = false); //cleanup function
    },[product, baseURL, id])
        

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return(
        <div>
        <Header/>
          <Box textAlign="center" mt={15}>
            <CircularProgress 
            centered
            sx={{ color: 'secondary.loading' }}/>
          </Box>
        <Footer/>
      </div>)
    } else {
    return ( 
        <div>
            <Header isLoggedIn={props.isLoggedIn}/>
            <Box mt={12} ml={10} mr={10}>
                <Card>
                    <CardContent>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            Picture
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'right'}}>
                        <Typography variant="body1" gutterBottom>
                            {product.description}
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
            </Box>
            <Footer/>
        </div>
     );}
}
 
export default ProductDetail;