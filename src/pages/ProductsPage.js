import Header from "../structure/Header";
import Footer from "../structure/Footer";
import AllProducts from "../components/AllProducts";

const ProductsPage = (props) => {
    return(
        <div>
           <Header isLoggedIn={props.isLoggedIn}/>
            <AllProducts baseURL={props.baseURL}/>
           <Footer/>
        </div>
    )
}

export default ProductsPage;