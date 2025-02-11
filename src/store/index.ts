import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './recucers/carrinho'

import api from '../services/api'

//qunado tem (parenteses) é uma função, quando tem {chaves} é um objeto, esse reducer é o centralizador de todos os reducer, é o principal
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(api.middleware) //para concatenar usamos o concat
})

export type RootReeducer = ReturnType<typeof store.getState>
