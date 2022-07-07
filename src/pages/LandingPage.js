import React, { useState, useEffect } from "react";
import _ from "lodash";
import { CircularProgress } from "@mui/material";
import Header from "../structure/Header";

const LandingPage = (props) => {
    const baseURL = props.baseURL;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let mounted = true;

        setTimeout(() => {
            async function getProducts() {
                fetch(`${baseURL}/products`,{
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
                );}getProducts();}, 5000);
        return () => (mounted = false); //cleanup function
    }, [products, baseURL])

    return(
        <div>
           <Header/>
        </div>
    )
}

export default LandingPage;