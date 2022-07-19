import { Card, CardContent, CardActions, CardActionArea, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router'
import useAxios from "../hooks/useAxios"
import { useContext, useState, useEffect } from "react"
import { CurrencyContext } from "../hooks/currencyContext"

const Product = (props) => {
    
    let navigate = useNavigate()
    const { currency } = useContext(CurrencyContext)
    let componentPrices = props.product.components.map((id) => id.price)
    const [price, setPrice] = useState([])
    
    const getPrice = () => {
      const { response } = useAxios({
        method: 'POST',
        mode: 'cors',
        url: '/priceRequest',
        data: {
          "prices": componentPrices
        }})
  
      useEffect(() => {
        if(response !== null)
        {
          var jsonStr = JSON.stringify(response)
          var value = ""
          for(var i = 14; i<jsonStr.length-1; i++){
            value += jsonStr[i]
          }
          setPrice(value)}
      },[response])
    }
    getPrice()


    useEffect(() => {
    let mounted = true
    async function getCurrency() {
      fetch(`${props.baseURL}/currencyRequest`,{
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          totalPrice: price,
          wantedCurrency: currency
        })
      })
        .then((result) => {
          if(result !== null && mounted)
          {
            var jsonStr = JSON.stringify(result)
            var value = ""
            for(var i = 14; i<jsonStr.length-1; i++){
              value += jsonStr[i]
            }
            setPrice(value)}
            console.log("value: "+value)
          }
        )
    } getCurrency()
    return () => (mounted = false) //cleanup function
    }, [currency])

    //   const { response } = useAxios({
    //     method: 'POST',
    //     mode: 'cors',
    //     url: '/currencyRequest',
    //     data: {
    //       "totalPrice": price,
    //       "wantedCurrency" : currency
    //     }})

    //     if(response !== null && mounted)
    //     {
    //       var jsonStr = JSON.stringify(response)
    //       var value = ""
    //       for(var i = 14; i<jsonStr.length-1; i++){
    //         value += jsonStr[i]
    //       }
    //       setPrice(value)}
    //     }
    //   getCurrency()
    //   return () => (mounted = false); //cleanup function
    // },[currency])

    return(
        <Card>
            <CardActionArea onClick={() => {navigate(`/product/${props.product.id}`)}}>
                    <CardContent>
                        <div>
                        <Typography variant="h6" gutterBottom>
                            {props.product.name}
                        </Typography>
                            <div style={{textAlign: 'right'}}>
                        <Typography variant="h6">
                          {price} {currency}
                        </Typography>
                            </div>
                        </div>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >Description
                        </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product