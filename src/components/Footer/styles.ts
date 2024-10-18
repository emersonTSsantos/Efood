import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.laranjaClaro};
  margin-top: 120px;
  display: flex;
  justify-content: center;
`

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Logo = styled.img`
  margin-top: 40px;
`

export const Lista = styled.ul`
  margin-top: 34px;
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const Descricao = styled.p`
  margin-top: 80px;
  margin-bottom: 40px;
  max-width: 500px;
  font-size: 10px;
`
