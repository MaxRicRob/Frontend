import { Grid, Box, CircularProgress } from "@mui/material"
import Component from "./Component"
import { useState, useEffect } from 'react'
import _ from "lodash"
import useAxios from "../hooks/useAxios"

const AllComponents = (props) => {

    const [components, setComponents] = useState([])
    const { response, loading, error } = useAxios({
      method: 'get',
      url: `${props.baseURL}/components`
    })

    useEffect(() => {
      if(response!==null)
      setComponents(response)
    },[response])

    if (error) {
        return <div>Error: {error.message}</div>
      } else if (loading) {
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