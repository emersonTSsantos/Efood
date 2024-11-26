import Tag from '../Tag'
import {
  CardContainer,
  Card,
  Imagem,
  InfoContainer,
  Titulo,
  AvaliacaoContainer,
  Avaliacao,
  AvaliacaoTexto,
  Descricao,
  Botao,
  Infos,
  StyledLink
} from './styles'

type Props = {
  id: number
  titulo: string
  descricao: string
  nota: string
  imagem: string
  imageEstrela: string
  infos: string[]
}

const Restaurantes = ({
  id,
  descricao,
  nota,
  titulo,
  imagem,
  infos,
  imageEstrela
}: Props) => (
  <CardContainer>
    <Card>
      <Imagem src={imagem} alt="Imagem do restaurante" />
      <Infos>
        {infos.map((info) => (
          <Tag key={info} size={info === 'italiana' ? 'pequeno' : 'grande'}>
            {info}
          </Tag>
        ))}
      </Infos>
      <InfoContainer>
        <Titulo>{titulo}</Titulo>
        <AvaliacaoContainer>
          <Avaliacao>
            <AvaliacaoTexto>{nota}</AvaliacaoTexto>
            <li>
              <img src={imageEstrela} alt="estrela" />
            </li>
          </Avaliacao>
        </AvaliacaoContainer>
      </InfoContainer>
      <Descricao>{descricao}</Descricao>
      <Botao>
        <StyledLink to={`/Perfil/${id}`}>Saiba mais</StyledLink>{' '}
      </Botao>
    </Card>
  </CardContainer>
)

export default Restaurantes
