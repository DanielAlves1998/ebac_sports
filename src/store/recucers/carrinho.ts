import { Produto } from '../../App'
import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction'
import { createSlice } from '@reduxjs/toolkit'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

//o reduxer slice ele tem tudo dentro de um objeto por isso que ele é uma reducer
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Esse item já foi adicionado à sua lista')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
