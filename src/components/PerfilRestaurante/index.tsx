import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import Pizza from '../../assets/images/pizza.png'
import Fechar from '../../assets/images/fechar.png'

import {
  Header,
  NavContainer,
  Logo,
  CartInfo,
  Hero,
  Container,
  PerfilRestaurante,
  NomeRestaurente,
  AbrirModal,
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  CardsGrid,
  ModalBackdrop,
  ModalContent,
  AddButton
} from './styles'

const Perfil = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  return (
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
                  <AbrirModal onClick={handleOpenModal}>
                    Adicionar ao carrinho
                  </AbrirModal>
                </CardContent>
              </Card>
            ))}
          </CardsGrid>
        </Container>
      </section>

      {isModalOpen && (
        <ModalBackdrop>
          <ModalContent>
            <img
              src={Fechar}
              alt="Fechar"
              onClick={() => setIsModalOpen(false)}
            />
            <img src={Pizza} />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <p>Serve: de 2 a 3 pessoas</p>
              <AddButton>Adicionar ao carrinho - R$ 60,90</AddButton>
            </div>
          </ModalContent>
        </ModalBackdrop>
      )}
    </div>
  )
}

export default Perfil
