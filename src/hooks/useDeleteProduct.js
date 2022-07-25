import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:8085"

const useDeleteProduct = (params) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const deleteProduct = async (params) => {
    try {
      const res = await axios.request(params);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

//   useEffect(() => {
//     fetchData(params);
//   }, []);

  return {response, error, loading, deleteProduct};
}
 
export default useDeleteProduct;