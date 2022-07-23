import { Card, CardContent, CardActionArea, Container, List, ListItem, ListItemText, Typography } from "@mui/material"
import { useNavigate } from 'react-router'
import useAxios from "../hooks/useAxios"
import { useContext, useState, useEffect } from "react"
import { CurrencyContext } from "../hooks/useCurrencyContext"

const Product = (props) => {
    
    let navigate = useNavigate()
    const { currency, currencySwitched, changeCurrency } = useContext(CurrencyContext)
    let componentPrices = props.product.components.map((id) => id.price)
    const [price, setPrice] = useState()
    const [initPrice, setInitPrice] = useState()
    const [detailPrice, setDetailPrice] = useState()

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
            if(currency === 'EUR' && currencySwitched){
              setPrice(initPrice)
              setDetailPrice(initPrice)
            }else 
            if (currency !== 'EUR' && currencySwitched){
              var jsonStr = JSON.stringify(result)
              var value = ""
              for(var i = 14; i<jsonStr.length-24; i++){
                value += jsonStr[i]
              }
              setPrice(value)
              setDetailPrice(value)
            }
          }
        })
      }
      getNewPrice()
      return () => (mounted = false)
    },[currency])

    const detailProductClickHandler = () => {
      navigate(`/product/${props.product.id}`)
      // setDetailPrice(price)
      // changeCurrency('EUR')
    }

    return(
      <Container>
      { (props.componentName === 'productDetail') ? 
        (<Card>
                    <CardContent>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="h5" gutterBottom>
                          {props.product.name}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'left', marginLeft: '5px'}}>
                            Product Components: 
                           <List>
                           {props.product.components.map((component) => (
                            <ListItem key={component.id} alignItems="flex-start">
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
                        <div style={{textAlign: 'right'}}>
                        <Typography variant="h6">
                            Total Price of Product: {detailPrice} {currency}
                        </Typography>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            ) : (props.componentName === 'allProducts') ?
            (<Card>
                <CardActionArea onClick={detailProductClickHandler}>
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
      </Container>
    )
}

export default Product