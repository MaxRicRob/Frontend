import axios from "axios";
import { useState, useEffect } from "react";

 axios.defaults.baseURL = "http://localhost:8085"    // for docker api
//axios.defaults.baseURL = "http://localhost:3002"  // mock-api

const useDeleteProduct = () => {
    const [deleteResponse, setDeleteResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const deleteProduct = async (id) => {
    try {
      const res = await axios.delete('/products/'+id,{
        headers:{ 
          mode: 'cors',
          "Content-Type": "application/json; charset=UTF-8"}
      });
      setDeleteResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {deleteResponse, error, loading, deleteProduct};
}
 
export default useDeleteProduct