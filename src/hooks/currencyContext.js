import React, { useReducer, createContext } from 'react'
import useAxios from './useAxios'

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

const appReducer = (state, action) => {
    switch(action.type){
        case 'USD':
            return{

            }
        default: return
    }
}

export const CurrencyCtxProvider = ({children}) => {
  const [currency, dispatch] = useReducer(appReducer, {...currencies[1]})

  const changeCurrency = () =>{

  }

  return(
    <CurrencyContext.Provider value={{currency, changeCurrency}}>
      {children}
    </CurrencyContext.Provider>
  )
}