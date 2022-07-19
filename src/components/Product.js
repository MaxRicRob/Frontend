import { Card, CardContent, CardActions, CardActionArea, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router'
import useAxios from "../hooks/useAxios"
import { useState, useEffect } from "react"

const Product = (props) => {
    
    let navigate = useNavigate()
    let componentPrices = props.product.components.map((id) => id.price)

    const [price, setPrice] = useState([])
    const { response, loading, error } = useAxios({
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
                          {price}
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