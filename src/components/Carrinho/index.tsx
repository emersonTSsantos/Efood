import { useDispatch, useSelector } from 'react-redux'
import { removerProduto, toggleCarrinho } from '../../store'
import pizza from '../../assets/images/pizza.png'
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
  const { items, total, isVisible } = useSelector(
    (state: any) => state.carrinho
  )
  const dispatch = useDispatch()

  const handleRemoveProduct = (id: number) => {
    dispatch(removerProduto(id))
  }

  const handleCloseCart = () => {
    dispatch(toggleCarrinho())
  }

  if (!isVisible) return null

  return (
    <>
      <Overlay onClick={handleCloseCart} />
      <CarrinhoContainer>
        <BarraLateral>
          <ProdutoLista>
            {items.length === 0 ? (
              <Vazio>O carrinho está vazio!</Vazio>
            ) : (
              items.map((item: any) => (
                <ProdutoItem key={item.id}>
                  <ProdutoImagem src={item.foto || pizza} alt={item.nome} />
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
          <BotaoContinuar>Continuar com a entrega</BotaoContinuar>
        </BarraLateral>
      </CarrinhoContainer>
    </>
  )
}

export default Carrinho
