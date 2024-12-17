import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
`

export const BarraLateral = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 360px;
  background-color: ${cores.laranjaEscuro};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 100;

  @media (max-width: 750px) {
    width: 300px;
  }
`

export const CheckoutContainer = styled.div`
  width: 100%;
  color: ${cores.laranjaClaro};
  font-size: 14px;

  h2 {
    font-weight: bold;
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 16px;
  }
`

export const BotaoVoltar = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  background-color: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 16px;
`

export const Campo = styled.div`
  margin-bottom: 16px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: none;
    background-color: ${cores.laranjaClaro};
  }
`

export const Container = styled.div`
  display: flex;
  column-gap: 24px;

  input {
    width: 100%;
  }
`

export const ContainerCartao = styled.div`
  display: flex;
  column-gap: 24px;
`

export const BotaoSubmit = styled.button`
  width: 100%;
  background-color: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 16px;
`
export const Titulo = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 14px;
`
