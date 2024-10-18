import CardRestaurante from '../CardRestaurante'
import { CardContainer } from '../CardRestaurante/styles'
import Restaurante from '../../models/Restaurante'

import { Lista } from './styles'

export type Props = {
  restaurante: Restaurante[]
}

const ListaDeRestaurantes = ({ restaurante }: Props) => (
  <CardContainer>
    <section>
      <Lista>
        {restaurante.map((restaurante) => (
          <CardRestaurante
            key={restaurante.id}
            imagem={restaurante.imagem}
            titulo={restaurante.titulo}
            nota={restaurante.nota}
            imageEstrela={restaurante.imageEstrela}
            descricao={restaurante.descricao}
            infos={restaurante.infos}
          />
        ))}
      </Lista>
    </section>
  </CardContainer>
)

export default ListaDeRestaurantes
