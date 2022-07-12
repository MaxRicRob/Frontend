import Header from "../structure/Header"
import Footer from "../structure/Footer"
import AllComponents from "../components/AllComponents"

const AllComponentsPage = (props) => {
    const baseURL = props.baseURL
    return ( 
        <div>
           <Header isLoggedIn={props.isLoggedIn}/>
            <AllComponents baseURL={baseURL}/>
           <Footer/>
        </div>
     );
}
 
export default AllComponentsPage;