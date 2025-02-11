import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  //endipoints é um construtor que recebe uma erow functioin que recebe um cosntrutor de endpoints, que chamamos de bilder
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const { useGetProdutosQuery } = api

export default api
