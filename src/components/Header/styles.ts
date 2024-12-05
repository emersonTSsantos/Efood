import styled from 'styled-components'

import ImagemFundo from '../../assets/images/fundoHeader.png'

export const Cabecalho = styled.header`
  background-image: url(${ImagemFundo});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  margin-bottom: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 750px) {
    height: 300px;
  }
`

export const Imagem = styled.img`
  width: 126px;
  margin-top: 40px;
`

export const Titulo = styled.h1`
  margin-top: 180px;
  font-size: 36px;

  @media (max-width: 750px) {
    margin-top: 80px;
    font-size: 26px;
  }
`
