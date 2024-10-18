import ListaDeRestaurantes from '../../components/ListaDeRestaurantes'
import Restaurante from '../../models/Restaurante'

import japones from '../../assets/images/hioki.png'
import estrela from '../../assets/images/estrela.png'
import laDolce from '../../assets/images/laDolce.png'

const restaurantesDaEfood: Restaurante[] = [
  {
    id: 1,
    imagem: japones,
    infos: ['Destaque da semana', 'Japonesa'],
    titulo: 'Hioki Sushi',
    nota: '4.9',
    imageEstrela: estrela,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    imagem: laDolce,
    infos: [' Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    imageEstrela: estrela,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <ListaDeRestaurantes restaurante={restaurantesDaEfood} />
    <ListaDeRestaurantes restaurante={restaurantesDaEfood} />
    <ListaDeRestaurantes restaurante={restaurantesDaEfood} />
  </>
)

export default Home
