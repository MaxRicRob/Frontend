import Router from "./router/Router";
import { useState } from "react";
import { CurrencyCtxProvider } from './hooks/useCurrencyContext'

const App = () => {

    return(
        <CurrencyCtxProvider>
            <Router/>
        </CurrencyCtxProvider>
    )
}

export default App;