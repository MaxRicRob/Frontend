import React, { useState, useEffect } from "react";
import _ from "lodash";
import { CircularProgress } from "@mui/material";
import Header from "../structure/Header";
import Footer from "../structure/Footer";
import AllProducts from "../products/AllProducts";

const LandingPage = (props) => {
    const baseURL = props.baseURL;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    return(
        <div>
           <Header/>
            <AllProducts baseURL={baseURL}/>
           <Footer/>
        </div>
    )
}

export default LandingPage;