import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Produto {
  id: number
  nome: string
  preco: number
  foto: string
}

export interface CarrinhoState {
  items: Produto[]
  total: number
  isVisible: boolean
  isCheckout: boolean
}

export const initialState: CarrinhoState = {
  items: [],
  total: 0,
  isVisible: false,
  isCheckout: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto(state, action: PayloadAction<Produto>) {
      state.items.push(action.payload)
      state.total += action.payload.preco
    },
    removerProduto(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce((total, item) => total + item.preco, 0)
    },
    toggleCarrinho(state) {
      state.isVisible = !state.isVisible
    },

    iniciarCheckout(state) {
      state.isVisible = false
      state.isCheckout = true
    },
    voltarParaCarrinho(state) {
      state.isCheckout = false
      state.isVisible = true
    },
    fecharCheckout(state) {
      state.isVisible = false
      state.isCheckout = false
    },
    limparCarrinho: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const {
  adicionarProduto,
  removerProduto,
  toggleCarrinho,
  iniciarCheckout,
  voltarParaCarrinho,
  fecharCheckout,
  limparCarrinho
} = carrinhoSlice.actions

export default carrinhoSlice.reducer
