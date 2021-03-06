import { Box, Card, CardContent, CardActionArea, IconButton, List, ListItem, ListItemText, Typography, Container } from "@mui/material"
import { useNavigate } from 'react-router'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useContext, useState, useEffect } from "react"
import { CurrencyContext } from "../hooks/useCurrencyContext"
import useAxios from "../hooks/useAxios"
import Numeral from 'react-numeral'

const UserProduct = (props) => {
    
    let navigate = useNavigate()
    const { currency, currencySwitched, changeCurrency } = useContext(CurrencyContext)
    
    if(props.product.components !== undefined){
      var productComponents = props.product.components
      var componentPrices = productComponents.map((id) => id.price)
    }

    const [price, setPrice] = useState()
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

    const onClickHandler = () => {
      props.editButtonHandler()
      console.log("clicked: "+props.product.id)
    }

    return(
        <Container>
        { (props.componentName === 'allUserProducts') ?
        (<Card>
            <CardActionArea onClick={() => {navigate(`/userproduct/${props.product.id}`)}}>
                    <CardContent>
                        <Box>
                        <Typography variant="h6" gutterBottom>
                            {props.product.name}
                        </Typography>
                            <Box sx={{textAlign: 'right'}}>
                        <Typography variant="h6">
                          <Numeral value={price/100} format={'0.00'}/> {currency}
                        </Typography>
                            </Box>
                        </Box>
                        <Box>
                        </Box>
                    </CardContent>
            </CardActionArea>
            <Box sx={{textAlign: 'right', padding: '10px'}}>
                            <IconButton onClick={onClickHandler}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => props.deleteButtonHandler(props.product.id)}>
                                <DeleteIcon />
                            </IconButton>
            </Box>
        </Card>
        ) : (props.componentName === 'userProductDetail') ? 
        (<Box mt={12} ml={10} mr={10}>
                <Card>
                    <CardContent>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="h5" gutterBottom>
                          {props.product.name}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'left', marginLeft: '5px'}}>
                            Product Components: 
                           <List>
                            {
                            (productComponents !== undefined) ? (
                              productComponents.map((component) => (
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
                                ))
                                ) : <></> 
                                }  
                            </List>
                        <div style={{textAlign: 'right'}}>
                        <Typography variant="h6">
                            Total Price of Product: <Numeral value={price/100} format={'0.00'}/> {currency}
                        </Typography>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </Box>) 
            : <></>
        }
        </Container>
    )
}

export default UserProduct