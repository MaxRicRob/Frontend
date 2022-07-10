import Header from "../structure/Header";
import Footer from "../structure/Footer";
import AllComponents from "../components/AllComponents";

const ComponentsPage = (props) => {
    
    const baseURL = props.baseURL;

    return ( 
        <div>
           <Header/>
            <AllComponents baseURL={baseURL}/>
           <Footer/>
        </div>
     );
}
 
export default ComponentsPage;