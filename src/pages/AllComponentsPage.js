import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Grid, Box, CircularProgress } from "@mui/material"
import Component from "../components/Component"
import { useState, useEffect } from 'react'
import _ from "lodash"
import useAxios from "../hooks/useAxios"

const AllComponentsPage = (props) => {
    const componentName = 'allComponents'
    const [components, setComponents] = useState([])
    const { response, loading, error } = useAxios({
      method: 'get',
      mode: 'cors',
      url: '/productComponents'
    })

    useEffect(() => {
      if(response!==null)
      setComponents(response)
    },[response])

    return ( 
        <div>
           <Header isLoggedIn={props.isLoggedIn} loggedUser={props.loggedUser}/>
            { (error)?(
                  <div>Error: {error.message}</div>
                  ) : (loading)? (
                  <Box textAlign="center" mt={15}>
                    <CircularProgress 
                    sx={{ color: 'secondary.loading' }}/>
                  </Box>
               ) : (
                  <Grid container justify="center">
                  {components.map((component) => (
                    <Grid item key={component.id} xs={12} sm={6} md={4} lg={4}>
                      <Box mt={12} ml={5} mr={5}>
                        <Component 
                        baseURL={props.baseURL} 
                        component={component} 
                        componentName={componentName}/>
                      </Box>
                    </Grid>
                  ))} 
                </Grid>
               )}
           <Footer/>
        </div>
     );
}
 
export default AllComponentsPage;