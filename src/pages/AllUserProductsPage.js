import Header from "../structure/Header"
import Footer from "../structure/Footer"
import AllUserProducts from "../components/AllUserProducts"

const AllUserProductsPage = (props) => {

    return(
        <div>
           <Header isLoggedIn={props.isLoggedIn}/>
            <AllUserProducts baseURL={props.baseURL}/>
           <Footer/>
        </div>
    )    
}

export default AllUserProductsPage