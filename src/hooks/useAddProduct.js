import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:8085"

const useAddProduct = () => {
    const [addProductResponse, setAddProductResponse] = useState(null);
    const [addProductError, setAddProductError] = useState("");
    const [addProductLoading, setAddProductLoading] = useState(true);

    const addProduct = async (data) => {
    try {
      const res = await axios.post('/products',data);
      setAddProductResponse(res.data);
    } catch (err) {
        setAddProductError(err);
    } finally {
        setAddProductLoading(false);
    }
  };

  return {addProductResponse, addProductError, addProductLoading, addProduct};
}
 
export default useAddProduct