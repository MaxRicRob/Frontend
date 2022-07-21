import { Card, CardContent, CardActions, CardActionArea, List, ListItem, ListItemText, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router'
import useAxios from "../hooks/useAxios"
import { useContext, useState, useEffect, useRef } from "react"
import { CurrencyContext } from "../hooks/useCurrencyContext"

const Product = (props) => {
    
    let navigate = useNavigate()
    const { currency, currencySwitched } = useContext(CurrencyContext)
    let componentPrices = props.product.components.map((id) => id.price)
    const [price, setPrice] = useState("")
    const [initPrice, setInitPrice] = useState()

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
          setPrice(value)
          setInitPrice(value)
        }
      },[response])
      
    }
    getPrice()

    const [newPrice, setNewPrice] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      let mounted = true
      async function getNewPrice(){
        const data = {
          totalPrice: price,
          wantedCurrency: currency
        }
        const requestOptions = {
          method: 'POST',
          mode: 'cors',
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify(data)
        }
        fetch(`${props.baseURL}/currencyRequest`,requestOptions)
        .then((res) => res.json())
        .then((result) => {
          if(mounted){
            setIsLoaded(true)
            if(currency === 'EUR' && currencySwitched){
              setPrice(initPrice)
            }else 
            if (currency !== 'EUR' && currencySwitched){
              var jsonStr = JSON.stringify(result)
              var value = ""
              for(var i = 14; i<jsonStr.length-24; i++){
                value += jsonStr[i]
              }
              setPrice(value)
            }
          }
        },
        (error) => {
          if (mounted){
            setIsLoaded(true)
            setError(error)
          }
        })
      }
      getNewPrice()
      return () => (mounted = false)
    },[currency])
        



      //   const { response } = useAxios({
      //     method: 'POST',
      //     mode: 'cors',
      //     url: '/currencyRequest',
      //     data: {
      //       "totalPrice": price,
      //       "wantedCurrency": currency
      //     }})

      //   if(response !== null)
      //   {
          // var jsonStr = JSON.stringify(response)
          // var value = ""
          // for(var i = 14; i<jsonStr.length-24; i++){
          //   value += jsonStr[i]
          // }
          // console.log("resvalue: "+value)
          // setNewPrice(value)
      //   }
      // },[currency])
    // }
    // getNewPrice()


    return(
      <div>
      { (props.componentName === 'productDetail') ? 
        (<Card>
                    <CardContent>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="h5" gutterBottom>
                          {props.product.name}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'left'}}>
                        <Typography variant="body1" gutterBottom>
                            Product Components: 
                           <List>
                           {props.product.components.map((component) => (
                            <ListItem alignItems="flex-start">
                              <ListItemText
                              primary={component.name}
                              secondary={
                                "ID: "+component.id+", "+
                                "Color: "+component.color+", "+ 
                                "Farmer: "+component.farmer+", "+
                                "Organic: "+component.organic+", "+
                                "Awesomeness: "+component.awesomeness+", "+
                                "Origin: "+component.origin+", "+
                                "Calories: "+component.calories+", "+
                                "Weight: "+component.weight+", "+
                                "Price: "+component.price
                              }
                              />
                            </ListItem>
                          ))}  
                            </List>
                        </Typography>
                        <div style={{textAlign: 'right'}}>
                        <Typography variant="h6">
                            Total Price of Product: {price}
                        </Typography>
                        </div>
                        </div>
                    </CardContent>
                </Card>)
            : (props.componentName === 'allProducts') ?
            (<Card>
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
                        </CardContent>
                </CardActionArea>
            </Card>)
            : <></>
      }
      </div>
    )
}

export default Product