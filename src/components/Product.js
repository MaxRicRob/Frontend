import { Card, CardContent, CardActions, CardActionArea, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router'
import useAxios from "../hooks/useAxios"
import { useState, useEffect } from "react"

const Product = (props) => {
    
    let navigate = useNavigate()

    let componentPrices = props.product.components.map((id) => id.price)
    // console.log(componentPrices)

    const [price, setPrice] = useState([])
    const { response, loading, error } = useAxios({
      method: 'get',
      mode: 'cors',
      url: '/priceRequest',
      headers: JSON.stringify({
        "Access-Control-Allow-Origin": "*"
      }),
      body: JSON.stringify({prices : [{componentPrices}]})
    })

    useEffect(() => {
      if(response !== null)
      setPrice(response)
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
                          Price
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