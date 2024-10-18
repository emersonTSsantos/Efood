import logo from '../../assets/images/logo.png'

import { Cabecalho, Imagem, Titulo } from './styles'

const Header = () => (
  <div>
    <Cabecalho>
      <Imagem src={logo} alt="logo do Efood" />
      <Titulo>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Titulo>
    </Cabecalho>
  </div>
)

export default Header
