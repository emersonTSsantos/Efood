import styled from 'styled-components'
import ImagemFundo from '../../assets/images/fundoHeader.png'
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

  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 750px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 750px) {
    height: 50px;
  }
`
export const Voltar = styled.img`
  height: 30px;
  margin-right: 8px;
  padding-top: 12px;
`

export const ContainerVoltar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const CartInfo = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${cores.laranjaEscuro};
  font-weight: bold;
  cursor: pointer;

  img {
    height: 20px;
    width: 20px;
    margin-left: 2px;
    display: inline-block;
  }

  span {
    margin-right: 4px;
  }

  @media (max-width: 750px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`

export const Container = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`

export const Hero = styled.section`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    height: 350px;
  }

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
  margin-bottom: 200px;
  font-size: 24px;
  color: ${cores.branco};
  filter: brightness(80%);

  @media (max-width: 1024px) {
    margin-bottom: 150px;
    margin-left: 50px;
  }
`

export const NomeRestaurente = styled.h3`
  color: ${cores.branco};
  font-weight: bold;
  font-size: 32px;

  @media (max-width: 1024px) {
    margin-left: 50px;
  }
`

export const Card = styled.div`
  width: 360px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  border: solid 8px;

  @media (max-width: 1024px) {
    margin: 10px;
  }

  @media (max-width: 750px) {
    margin: 20px;
    width: 340px;
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 56px;
  grid-gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
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

  @media (max-width: 1204px) {
    width: 95%;
    height: 330px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    height: 550px;
  }

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

    @media (max-width: 750px) {
      width: 220px;
      height: 200px;
      margin: 0;
      margin-top: 15px;
      border-radius: 8px;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${cores.laranjaClaro};

    @media (max-width: 750px) {
      margin-top: 10px;
      text-align: center;
    }
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.laranjaClaro};

    @media (max-width: 750px) {
      text-align: center;
    }
  }

  div {
    font-size: 14px;

    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
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

export const Carregando = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  transform: scale(3);

  .c-loader {
    animation: is-rotating 1s infinite;
    width: 50px;
    height: 50px;
    border: 6px solid ${cores.laranjaClaro};
    border-radius: 50%;
    border-top-color: ${cores.laranjaEscuro};

    @keyframes is-rotating {
      to {
        transform: rotate(2turn);
      }
    }
  }
`
