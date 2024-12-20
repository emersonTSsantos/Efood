import { useDispatch, useSelector } from 'react-redux'

import {
  iniciarCheckout,
  removerProduto,
  toggleCarrinho
} from '../../store/reducers/carrinho'

import { Produto } from '../../store/reducers/carrinho'
import Checkout from '../Checkout'
import { RootState } from '../../store'

import lixeira from '../../assets/images/lixeira.png'

import {
  CarrinhoContainer,
  BarraLateral,
  ProdutoImagem,
  ProdutoInfo,
  ProdutoItem,
  ProdutoLista,
  ProdutoNome,
  ProdutoPreco,
  Total,
  IconeLixeira,
  BotaoContinuar,
  Overlay,
  Vazio
} from './styles'

const Carrinho = () => {
  const { items, total, isVisible, isCheckout } = useSelector(
    (state: RootState) => state.carrinho
  )
  const dispatch = useDispatch()

  const handleRemoveProduct = (id: number) => {
    dispatch(removerProduto(id))
  }

  const handleCloseCart = () => {
    dispatch(toggleCarrinho())
  }

  if (isCheckout) {
    return <Checkout />
  }

  if (!isVisible) return null

  return (
    <>
      <Overlay onClick={handleCloseCart} />
      <CarrinhoContainer>
        <BarraLateral>
          (
          <>
            <ProdutoLista>
              {items.length === 0 ? (
                <Vazio>O carrinho está vazio!</Vazio>
              ) : (
                items.map((item: Produto) => (
                  <ProdutoItem key={item.id}>
                    <ProdutoImagem src={item.foto} alt={item.nome} />
                    <ProdutoInfo>
                      <ProdutoNome>{item.nome}</ProdutoNome>
                      <ProdutoPreco>R$ {item.preco.toFixed(2)}</ProdutoPreco>
                    </ProdutoInfo>
                    <IconeLixeira
                      src={lixeira}
                      alt="Remover item"
                      onClick={() => handleRemoveProduct(item.id)}
                    />
                  </ProdutoItem>
                ))
              )}
            </ProdutoLista>
            <Total>
              <p>Valor Total</p>
              <p>R$ {total.toFixed(2)}</p>
            </Total>
            <BotaoContinuar onClick={() => dispatch(iniciarCheckout())}>
              Continuar com a entrega
            </BotaoContinuar>
          </>
          )
        </BarraLateral>
      </CarrinhoContainer>
    </>
  )
}

export default Carrinho
