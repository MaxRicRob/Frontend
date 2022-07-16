import { Card, CardContent, CardActions, CardActionArea, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router'
import useAxios from "../hooks/useAxios"

const Component = (props) => {
    
    let navigate = useNavigate()

    const { response, loading, error } = useAxios({
        method: 'get',
        mode: 'cors',
        url: '/currencyRequest',
        body: JSON.stringify({
            //add price object -> currency ctx needed
        })
    })


    
    return ( 
        <Card>
        <CardActionArea onClick={() => {navigate(`/component/${props.component.id}`)}}>
                <CardContent>
                    <div>
                    <Typography variant="h6" gutterBottom>
                        {props.component.name}
                    </Typography>
                        <div style={{textAlign: 'right'}}>
                    <Typography variant="h6">
                        {props.component.price}
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
 
export default Component