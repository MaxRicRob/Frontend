import { Card, CardContent, CardActionArea, Grid, ListItem, ListItemText, Typography } from "@mui/material"
import { useNavigate } from 'react-router'
import { CurrencyContext } from "../hooks/useCurrencyContext"
import {useContext, useState, useEffect} from 'react'

const Component = (props) => {
    
    let navigate = useNavigate()
    const { currency, currencySwitched } = useContext(CurrencyContext)
    const [price, setPrice] = useState("")
    const [initPrice, setInitPrice] = useState()
    
    useEffect(() => {
        if(props.component.price !== ''){
            setInitPrice(props.component.price)
            setPrice(props.component.price)}
    },[])

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
          })
        }
        getNewPrice()
        return () => (mounted = false)
      },[currency])

    return (
        <div>
            {(props.componentName === 'allComponents') ? (
                 <Card>
                 <CardActionArea onClick={() => {navigate(`/component/${props.component.id}`)}}>
                         <CardContent>
                             <div>
                             <Typography variant="h6" gutterBottom>
                                 {props.component.name}
                             </Typography>
                                 <div style={{textAlign: 'right'}}>
                             <Typography variant="h6">
                                 {price} {currency}
                             </Typography>
                                 </div>
                             </div>
                         </CardContent>
                    </CardActionArea>
                </Card>
            ) : (props.componentName === 'componentDetail') ? (
                <Card>
                    <CardContent>
                        <div style={{textAlign: 'center'}}>
                            <Typography variant="h5" gutterBottom>
                            {props.component.name}
                            </Typography>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                        <Typography variant="body1" gutterBottom>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText primary={"ID: "+props.component.id}/>
                            </ListItem>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText primary={"Color: "+props.component.color}/>
                            </ListItem>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText primary={"Farmer: "+props.component.farmer}/>
                            </ListItem>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText primary={"Organic: "+props.component.organic}/>
                            </ListItem>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText primary={"Awesomeness: "+props.component.awesomeness}/>
                            </ListItem>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText primary={"Origin: "+props.component.origin}/>
                            </ListItem>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText primary={"Calories: "+props.component.calories}/>
                            </ListItem>
                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemText primary={"Weight: "+props.component.weight}/>
                            </ListItem>
                        </Typography>
                        </div>
                        <div style={{textAlign: 'center', marginTop: 10}}>
                        <Typography variant="h6">
                            Price: {price} {currency}
                        </Typography>
                        </div>
                    </CardContent>
                </Card>
            ) : <></>

            }
       
    </div> 
     )
}
 
export default Component