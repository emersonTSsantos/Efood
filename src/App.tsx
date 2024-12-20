import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'

import { GlobalCss } from './styles'

import Home from './pages/Home'
import Footer from './components/Footer'
import Perfil from './components/PerfilRestaurante'
import Carrinho from './components/Carrinho'
import Checkout from './components/Checkout'

import store, { RootState } from './store'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil/:id" element={<Perfil />} />
  </Routes>
)

function App() {
  const { isCheckout } = useSelector((state: RootState) => state.carrinho)

  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        {isCheckout ? <Checkout /> : <Carrinho />}
      </BrowserRouter>
    </>
  )
}

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
