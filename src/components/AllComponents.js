import { Grid, Box, CircularProgress } from "@mui/material"
import Component from "./Component"
import { useState, useEffect } from 'react'
import _ from "lodash"

const AllComponents = (props) => {

    const [components, setComponents] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        let mounted = true
        setTimeout(() => {
            async function getComponents() {
                fetch(`${props.baseURL}/components`,{
                    method: "GET",
                    credentials: "include",
                }).then((res) => res.json())
                .then(
                    (result) =>{
                        if(mounted){
                            setIsLoaded(true)
                            setComponents(result)
                        }
                    },
                    (error) =>{
                        if(mounted){
                            setIsLoaded(true)
                            setError(error)
                        }
                    }
                )}
                getComponents()}, 2000)
        return () => (mounted = false) //cleanup function
    }, [components, props.baseURL])

    if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return(
        <Box textAlign="center" mt={15}>
          <CircularProgress 
          centered
          sx={{ color: 'secondary.loading' }}/>
        </Box>
          )
      } else {
    return ( 
        <Grid container justify="center">
        {components.map((component) => (
          <Grid item key={component.id} xs={12} sm={6} md={4} lg={4}>
            <Box mt={12} ml={5} mr={5}>
              <Component component={component}/>
            </Box>
          </Grid>
        ))} 
      </Grid>
     )}
}
 
export default AllComponents