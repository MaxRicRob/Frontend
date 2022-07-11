import Router from "./router/Router";
import { useState } from "react";

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    )
}

export default App;