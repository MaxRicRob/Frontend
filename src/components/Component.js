import { Card, CardContent, CardActionArea, Grid, ListItem, ListItemText, Typography } from "@mui/material"
import { useNavigate } from 'react-router'

const Component = (props) => {
    
    let navigate = useNavigate()

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
                                 {props.component.price}
                             </Typography>
                                 </div>
                             </div>
                             <Typography
                               variant="body2"
                               color="textSecondary">
                                Description: ... 
                             </Typography>
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
                            Price: {props.component.price}
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