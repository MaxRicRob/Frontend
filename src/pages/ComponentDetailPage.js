import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box, Card, CardContent, CircularProgress, Typography} from "@mui/material"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"

const ComponentDetailPage = (props) => {
    const baseURL = props.baseURL
    const [component, setComponent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)    
    const [error, setError] = useState(null)

    const { id } = useParams() //gets id from current route

    useEffect(() => {
        let mounted = true
        setTimeout(() => {
          async function getComponent() {
            fetch(`${baseURL}/components/${id}`, {
              method: "GET",
              credentials: "include",
            })
              .then((res) => res.json())
              .then(
                (result) => {
                  if (mounted) {
                    setIsLoaded(true)
                    setComponent(result)
                  }
                },
                (error) => {
                  if (mounted) {
                    setIsLoaded(true)
                    setError(error)
                  }
                }
              )
          } 
          getComponent()},2000)
        return () => (mounted = false) //cleanup function
    },[component, baseURL, id])
        

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
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