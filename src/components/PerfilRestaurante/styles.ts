import styled from 'styled-components'
import ImagemFundo from '../../assets/images/fundoHeader.png'
import LaDolce from '../../assets/images/laDolce.png'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: url(${ImagemFundo});
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: ${cores.laranjaEscuro};
  }
`

export const Logo = styled.img`
  height: 60px;
  margin: 0 auto;
`

export const CartInfo = styled.p`
  font-size: 18px;
  color: ${cores.laranjaEscuro};
  font-weight: bold;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Hero = styled.section`
  position: relative;
  background-image: url(${LaDolce});
  background-size: cover;
  background-position: center;
  height: 350px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  ${Container} {
    position: relative;
    z-index: 2;
  }
`

export const PerfilRestaurante = styled.h3`
  padding-top: 24px;
  margin-bottom: 260px;
  color: ${cores.cinzaClaro};
  filter: brightness(80%);
`

export const NomeRestaurente = styled.h3`
  color: ${cores.branco};
  font-weight: bold;
`

export const Card = styled.div`
  width: 320px;
  height: 338px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  border: solid 8px;
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 56px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 185px;
  object-fit: cover;
`

export const CardContent = styled.div`
  color: ${cores.laranjaClaro};
  background-color: ${cores.laranjaEscuro};
`

export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

export const AbrirModal = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: ${cores.corFundo};
    color: ${cores.laranjaEscuro};
  }
`

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

export const ModalContent = styled.div`
  background: ${cores.laranjaEscuro};
  width: 1024px;
  height: 344px;
  position: absolute;
  display: flex;
  padding: 24px;

  img:first-child {
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  img:nth-child(2) {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: fill;
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${cores.laranjaClaro};
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.laranjaClaro};
  }
`

export const AddButton = styled.button`
  width: 218px;
  height: 24px;
  background-color: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: ${cores.corFundo};
    color: ${cores.laranjaEscuro};
  }
`
