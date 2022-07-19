import Router from "./router/Router";
import { useState } from "react";
import { CurrencyCtxProvider } from './hooks/currencyContext'

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <CurrencyCtxProvider>
            <Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </CurrencyCtxProvider>
    )
}

export default App;