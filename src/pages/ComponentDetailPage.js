import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { Box} from "@mui/material"
import React from "react"
import { useParams } from "react-router"
import Component from "../components/Component"

const ComponentDetailPage = (props) => {

    const componentName = 'componentDetail'
    const { id } = useParams() //gets id from current route
    const component = props.defaultComponents[id]
    
    return ( 
        <div>
            <Header isLoggedIn={props.isLoggedIn} loggedUser={props.loggedUser}/>
            <Box mt={12} ml={10} mr={10}>
                <Component 
                baseURL={props.baseURL} 
                component={component} 
                componentName={componentName}/>
            </Box>
            <Footer/>
        </div>
     )
}
 
export default ComponentDetailPage