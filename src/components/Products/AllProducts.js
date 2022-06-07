import React, { useState, useEffect } from "react";
import _ from "lodash";

const AllProducts = (props) => {
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
                );}getProducts();}, 500000);
        return () => (mounted = false); //cleanup function
    }, [products, baseURL])

    if (error){
        return <div>Error: {error.message}</div>
    } else if(!isLoaded){
        return <div className="loading-screen">Loading Products...</div>
    } else{
        return(
            <div>
                {!_.isEmpty(products) ? (
                    products.map(
                        (product) =>{
                            return(
                            <div key={product.id}>
                                <h5>{product.name}</h5>
                            </div>
                            )})): (<p>Empty. No Products available.</p>)}
            </div>
        )
    }
}

export default AllProducts;