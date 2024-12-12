import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
  foto: string
}

interface CarrinhoState {
  items: Produto[]
  total: number
  isVisible: boolean
  isCheckout: boolean
}

const initialState: CarrinhoState = {
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
      state.isCheckout = true
    },
    voltarParaCarrinho(state) {
      state.isCheckout = false
    }
  }
})

export const {
  adicionarProduto,
  removerProduto,
  toggleCarrinho,
  iniciarCheckout,
  voltarParaCarrinho
} = carrinhoSlice.actions

export default carrinhoSlice.reducer
