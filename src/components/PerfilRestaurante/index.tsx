import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import Pizza from '../../assets/images/pizza.png'

import {
  Header,
  NavContainer,
  Logo,
  CartInfo,
  Hero,
  Container,
  PerfilRestaurante,
  NomeRestaurente,
  AddButton,
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  CardsGrid
} from './styles'

const Perfil = () => (
  <div>
    <Header>
      <NavContainer>
        <Link to="/">Restaurantes</Link>
      </NavContainer>
      <Logo src={logo} alt="Logo Efood" />
      <CartInfo>
        <span>0 </span>
        produto(s) no carrinho
      </CartInfo>
    </Header>
    <Hero>
      <Container>
        <PerfilRestaurante>Italiana</PerfilRestaurante>
        <NomeRestaurente>La Dolce Vita Trattoria</NomeRestaurente>
      </Container>
    </Hero>
    <section>
      <Container>
        <CardsGrid>
          {[...Array(6)].map((_, index) => (
            <Card key={index}>
              <CardImage src={Pizza} alt="Pizza" />
              <CardContent>
                <CardTitle>Pizza Marguerita</CardTitle>
                <CardDescription>
                  A clássica Marguerita: molho de tomate suculento, mussarela
                  derretida, manjericão fresco e um toque de azeite. Sabor e
                  simplicidade!
                </CardDescription>
                <AddButton>Adicionar ao carrinho</AddButton>
              </CardContent>
            </Card>
          ))}
        </CardsGrid>
      </Container>
    </section>
  </div>
)

export default Perfil
