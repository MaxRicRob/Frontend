import { Card, CardContent, CardActions, CardActionArea, List, ListItem, ListItemText, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router'
import useAxios from "../hooks/useAxios"
import { useContext, useState, useEffect } from "react"
import { CurrencyContext } from "../hooks/useCurrencyContext"

const Product = (props) => {
    
    let navigate = useNavigate()
    const { currency } = useContext(CurrencyContext)
    let componentPrices = props.product.components.map((id) => id.price)
    const [price, setPrice] = useState("")
    
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

    const [newPrice, setNewPrice] = useState("")

    const getNewPrice = () => {

      console.log("getNewPrice-price: "+price)
      console.log("getNewPrice-currency: "+currency)

      const { response } = useAxios({
        method: 'POST',
        mode: 'cors',
        url: '/currencyRequest',
        data: {
          "totalPrice": price,
          "wantedCurrency": currency
        }})
      console.log("response: "+response)
  
      useEffect(() => {
        console.log("used effect")
        if(response !== null)
        {
          var jsonStr = JSON.stringify(response)
          var value = ""
          for(var i = 14; i<jsonStr.length-24; i++){
            value += jsonStr[i]
          }
          console.log("resvalue: "+value)
          setPrice(value)
        }
      },[response, currency])
    }
    getNewPrice()

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