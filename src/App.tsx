import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Header from './components/Header'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
