import { ContainerTag } from './styles'

export type Props = {
  size?: 'grande' | 'pequeno'
  children: string
}

const Tag = ({ children, size = 'grande' }: Props) => (
  <ContainerTag size={size}>{children}</ContainerTag>
)

export default Tag
