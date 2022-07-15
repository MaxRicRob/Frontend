import React, { useReducer, createContext } from 'react'
import useAxios from './useAxios'

export const Currencies = [
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

const Context = createContext({
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