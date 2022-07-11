import { Card, CardContent, CardActions, CardActionArea, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router'

const Component = ({component}) => {
    
    let navigate = useNavigate()
    
    return ( 
        <Card>
        <CardActionArea onClick={() => {navigate(`/component/${component.id}`)}}>
                <CardContent>
                    <div>
                    <Typography variant="h6" gutterBottom>
                        {component.name}
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
 
export default Component