// src/components/PerfilRestaurante/index.tsx
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { adicionarProduto } from '../../store' // Ajustado para usar a exportação correta do Redux

import Fechar from '../../assets/images/fechar.png'
import Efood from '../../assets/images/logo.png'
import IrParaHome from '../../assets/images/2268485.png'

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
  AddButton,
  Voltar,
  ContainerVoltar
} from './styles'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<any>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const response = await axios.get(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        setRestaurante(response.data)
      } catch (error) {
        console.error('Erro ao buscar o restaurante:', error)
      }
    }

    if (id) fetchRestaurante()
  }, [id])

  const handleOpenModal = (prato: any) => {
    setPratoSelecionado(prato)
    setIsModalOpen(true)
  }

  const truncateDescription = (descricao: string, maxLength: number) => {
    if (descricao.length > maxLength) {
      return descricao.slice(0, maxLength) + '...'
    }
    return descricao
  }

  const handleAddToCart = (prato: any) => {
    dispatch(
      adicionarProduto({
        id: prato.id,
        nome: prato.nome,
        preco: prato.preco,
        foto: prato.foto
      })
    )
    setIsModalOpen(false) // Fecha o modal após adicionar
  }

  if (!restaurante) {
    return <p>Carregando perfil...</p>
  }

  return (
    <div>
      <Header>
        <NavContainer>
          <ContainerVoltar>
            <Link to="/">
              <Voltar src={IrParaHome} alt="" />
              Restaurantes
            </Link>
          </ContainerVoltar>
        </NavContainer>
        <Logo src={Efood} alt="Logo Efood" />
        <CartInfo>
          <span>0 </span>
          produto(s) no carrinho
        </CartInfo>
      </Header>

      <Hero style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <Container>
          <PerfilRestaurante>{restaurante.tipo}</PerfilRestaurante>
          <NomeRestaurente>{restaurante.titulo}</NomeRestaurente>
        </Container>
      </Hero>

      <section>
        <Container>
          <CardsGrid>
            {restaurante.cardapio.map((item: any) => (
              <Card key={item.id}>
                <CardImage src={item.foto} alt={item.nome} />
                <CardContent>
                  <CardTitle>{item.nome}</CardTitle>
                  <CardDescription>
                    {truncateDescription(item.descricao, 140)}
                  </CardDescription>
                  <AbrirModal onClick={() => handleOpenModal(item)}>
                    Adicionar ao carrinho
                  </AbrirModal>
                </CardContent>
              </Card>
            ))}
          </CardsGrid>
        </Container>
      </section>

      {isModalOpen && pratoSelecionado && (
        <ModalBackdrop
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false)
            }
          }}
        >
          <ModalContent>
            <img
              src={Fechar}
              alt="Fechar"
              onClick={() => setIsModalOpen(false)}
            />
            <img src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
            <div>
              <h3>{pratoSelecionado.nome}</h3>
              <p>{pratoSelecionado.descricao}</p>
              <p>Serve: {pratoSelecionado.porcao}</p>
              <AddButton onClick={() => handleAddToCart(pratoSelecionado)}>
                Adicionar ao carrinho - R$ {pratoSelecionado.preco.toFixed(2)}
              </AddButton>
            </div>
          </ModalContent>
        </ModalBackdrop>
      )}
    </div>
  )
}

export default Perfil
