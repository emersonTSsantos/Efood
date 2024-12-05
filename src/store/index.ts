import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
  foto: string
}

interface CarrinhoState {
  items: Produto[]
  total: number
  isVisible: boolean // Controle de visibilidade do carrinho
}

const initialState: CarrinhoState = {
  items: [],
  total: 0,
  isVisible: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    // Adiciona um produto ao carrinho
    adicionarProduto(state, action: PayloadAction<Produto>) {
      state.items.push(action.payload)
      state.total += action.payload.preco
    },
    // Remove um produto do carrinho
    removerProduto(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce((total, item) => total + item.preco, 0)
    },
    // Alterna a visibilidade do carrinho
    toggleCarrinho(state) {
      state.isVisible = !state.isVisible
    }
  }
})

export const { adicionarProduto, removerProduto, toggleCarrinho } =
  carrinhoSlice.actions

const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice.reducer
  }
})

export default store
