import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:8085"    // for docker api

const useUpdateProduct = () => {
    const [updateProductResponse, setUpdateProductResponse] = useState(null);
    const [updateProductError, setUpdateProductError] = useState("");
    const [updateProductLoading, setUpdateProductLoading] = useState(true);

    const updateProduct = async (data) => {
    try {
      const res = await axios.put('/products',data);
      setUpdateProductResponse(res.data);
    } catch (err) {
        setUpdateProductError(err);
    } finally {
        setUpdateProductLoading(false);
    }
  };

  return {updateProductResponse, updateProductError, updateProductLoading, updateProduct};
}
 
export default useUpdateProduct