import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './pages/Home'
import Footer from './components/Footer'
import Perfil from './components/PerfilRestaurante'
import Carrinho from './components/Carrinho'

import store from './store'
import { Provider } from 'react-redux'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil/:id" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Carrinho />
      </BrowserRouter>
    </Provider>
  )
}

export default App
