import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:3002"

const useAxios = ({url, method, body = null, headers = null}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then(res => setResponse(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        }
        fetchData();
    }, [url, method, body, headers]);

    return {response, error, loading};
}
 
export default useAxios;