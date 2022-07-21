import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:8085"

const useGetNewPrice = (price, currency) => {
    const [getNewPriceResponse, setGetNewPriceResponse] = useState(null);
    const [getNewPriceError, setGetNewPriceError] = useState("");
    const [getNewPriceLoading, setGetNewPriceLoading] = useState(true);

    const data = {
        "totalPrice": price,
        "wantedCurrency": currency
    }

    const fetchData = async () => {
    try {
      const res = await axios
      .post('/currencyRequest', data);
      setGetNewPriceResponse(res.data);
      setGetNewPriceError(null);
    } catch (err) {
      setGetNewPriceError(err);
    } finally {
      setGetNewPriceLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {getNewPriceResponse, getNewPriceError, getNewPriceLoading};
}
 
export default useGetNewPrice;