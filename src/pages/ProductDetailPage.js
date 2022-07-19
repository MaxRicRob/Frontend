import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box, Card, CardContent, CircularProgress, List, ListItem, ListItemText, Typography} from "@mui/material"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import useAxios from "../hooks/useAxios"

const ProductDetailPage = (props) => {
    const { id } = useParams() //gets productID from current url-parameter

    const product = props.defaultProducts[id]

    console.log(props.defaultProducts)

    return ( 
        <div>
            <Header isLoggedIn={props.isLoggedIn}/>
            <Box mt={12} ml={10} mr={10}>
                <Card>
                    <CardContent>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="h5" gutterBottom>
                          {/* {product.name} */}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'left'}}>
                        <Typography variant="body1" gutterBottom>
                            Product Components: 
                           {/* <List>
                           {product.components.map((component) => (
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
                            </List> */}
                        </Typography>
                        <div style={{textAlign: 'right'}}>
                        <Typography variant="h6">
                            Total Price of Product: 
                        </Typography>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </Box>
            <Footer/>
        </div>
     )
    }
// }
 
export default ProductDetailPage