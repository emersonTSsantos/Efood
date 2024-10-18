import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Container, FooterWrapper, Logo, Lista, Descricao } from './styles'

const Footer = () => (
  <Container>
    <FooterWrapper>
      <Logo src={logo} alt="logo do efood" />
      <Lista>
        <li>
          <img src={instagram} alt="logo do instagran" />
        </li>
        <li>
          <img src={facebook} alt="logo do facebook" />
        </li>
        <li>
          <img src={twitter} alt="logo do twitter" />
        </li>
      </Lista>
      <Descricao>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Descricao>
    </FooterWrapper>
  </Container>
)

export default Footer
