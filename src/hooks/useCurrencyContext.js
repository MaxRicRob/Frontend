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
      value: 'PND',
      label: '£',
    }
  ]

export const CurrencyContext = createContext({
    currency: {},
    currencySwitched: {},
    changeCurrency: () => {},
})

export const CurrencyCtxProvider = ({children}) => {

  const [currency, setCurrency] = useState("EUR")
  const [currencySwitched, setCurrencySwitched] = useState(false)

  const changeCurrency = (currencyToChangeTo) =>{
      setCurrency(currencyToChangeTo)
      setCurrencySwitched(true)
  }

  return(
    <CurrencyContext.Provider value={{currency, currencySwitched, changeCurrency}}>
      {children}
    </CurrencyContext.Provider>
  )
}