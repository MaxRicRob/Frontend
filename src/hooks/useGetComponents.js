import axios from "axios";
import { useState, useEffect } from "react";

// axios.defaults.baseURL = "http://localhost:8085"    // for docker api
axios.defaults.baseURL = "http://localhost:3002"  // mock-api

const useGetComponents = () => {
    const [getComponentsResponse, setGetComponentsResponse] = useState(null);
    const [getComponentsError, setGetComponentsError] = useState("");
    const [getComponentsLoading, setGetComponentsLoading] = useState(true);

    const fetchData = async () => {
    try {
      const res = await axios.get('/productComponents');
      setGetComponentsResponse(res.data);
      setGetComponentsError(null);
    } catch (err) {
      setGetComponentsError(err);
    } finally {
      setGetComponentsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {getComponentsResponse, getComponentsError, getComponentsLoading};
}
 
export default useGetComponents;