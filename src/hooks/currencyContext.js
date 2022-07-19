import React, { createContext, useState } from 'react'

export const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'MXN',
      label: 'MX$',
    },
    {
      value: 'CAD',
      label: 'CA$',
    },
    {
      value: 'YEN',
      label: '¥',
    },
    {
      value: 'POUND',
      label: '£',
    }
  ]

export const CurrencyContext = createContext({
    currency: {},
    changeCurrency: () => {}
})

export const CurrencyCtxProvider = ({children}) => {

  const [currency, setCurrency] = useState("EUR")

  const changeCurrency = (currencyToChangeTo) =>{
    setCurrency(currencyToChangeTo)
  }

  return(
    <CurrencyContext.Provider value={{currency, changeCurrency}}>
      {children}
    </CurrencyContext.Provider>
  )
}