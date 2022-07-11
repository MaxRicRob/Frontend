import Header from "../structure/Header"
import Footer from "../structure/Footer"
import { useState } from "react"
import { useParams } from "react-router"
import OnlyUserProducts from "../components/OnlyUserProducts"

const UserProductsPage = (props) => {

    const [product, setProduct] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)    
    const [error, setError] = useState(null)

    const { userID } = useParams() //gets id from current route

    return(
        <div>
           <Header isLoggedIn={props.isLoggedIn}/>
            <OnlyUserProducts baseURL={props.baseURL}/>
           <Footer/>
        </div>
    )    
}

export default UserProductsPage