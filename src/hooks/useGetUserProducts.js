import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:8085"

const useGetUserProducts = () => {
    const [getUserProductsResponse, setGetUserProductsResponse] = useState(null);
    const [getUserProductsError, setGetUserProductsError] = useState("");
    const [getUserProductsLoading, setGetUserProductsLoading] = useState(true);

    const getUserProducts = async (id) => {
    try {
      const res = await axios.get('/products/'+id,{ 
        headers:{ mode: 'cors'}
      });
      setGetUserProductsResponse(res.data);
      setGetUserProductsError(null);
    } catch (err) {
      setGetUserProductsError(err);
    } finally {
      setGetUserProductsLoading(false);
    }
  };

  return {getUserProductsResponse, getUserProductsError, getUserProductsLoading, getUserProducts};
}
 
export default useGetUserProducts;