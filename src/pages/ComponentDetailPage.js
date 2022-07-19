import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box, Card, CardContent, CircularProgress, Typography} from "@mui/material"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import useAxios from "../hooks/useAxios"

const ComponentDetailPage = (props) => {
    const baseURL = props.baseURL
    const [component, setComponent] = useState([])
    const { id } = useParams() //gets id from current route
    
    const { response, loading, error } = useAxios({
      method: 'get',
      url: `${baseURL}/components/${id}`
    })

    useEffect(() => {
      if(response !== null)
        setComponent(response)
    },[response])
        
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (loading) {
      return(
        <div>
            <Header/>
                <Box textAlign="center" mt={15}>
                <CircularProgress 
                centered
                sx={{ color: 'secondary.loading' }}/>
                </Box>
            <Footer/>
        </div>    
        )
    } else {
    return ( 
        <div>
            <Header isLoggedIn={props.isLoggedIn}/>
            <Box mt={12} ml={10} mr={10}>
                <Card>
                    <CardContent>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            Picture
                        <Typography variant="h5" gutterBottom>
                            {component.name}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'right'}}>
                        <Typography variant="body1" gutterBottom>
                            {component.description}
                        </Typography>
                        </div>
                        <div style={{textAlign: 'left'}}>
                        <Typography variant="body1" gutterBottom>
                            Component Details: a, b, c
                        </Typography>
                        <Typography variant="h6">
                            Price
                        </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Box>
            <Footer/>
        </div>
     )}
}
 
export default ComponentDetailPage