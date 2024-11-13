import { createGlobalStyle } from 'styled-components'

export const cores = {
  corFundo: '#FFF8F2',
  laranjaEscuro: '#E66767',
  laranjaClaro: '#FFEBD9',
  branco: '#fff',
  cinzaClaro: '#ECEBE9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.corFundo};
    color: ${cores.laranjaEscuro};
  }
`

export default GlobalCss
