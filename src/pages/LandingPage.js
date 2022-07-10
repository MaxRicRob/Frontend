import Header from "../structure/Header";
import Footer from "../structure/Footer";
import AllProducts from "../components/AllProducts";

const LandingPage = (props) => {
    const baseURL = props.baseURL;

    return(
        <div>
           <Header/>
            <AllProducts baseURL={baseURL}/>
           <Footer/>
        </div>
    )
}

export default LandingPage;