import { useDispatch } from 'react-redux'
import { voltarParaCarrinho } from '../../store/reducers/carrinho'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import {
  Overlay,
  CheckoutContainer,
  BotaoVoltar,
  Campo,
  CampoErro,
  BotaoSubmit,
  BarraLateral,
  Container
} from './styles'

const Checkout = () => {
  const dispatch = useDispatch()

  const initialValues = {
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  }

  const validationSchema = Yup.object({
    nome: Yup.string().required('O nome é obrigatório'),
    endereco: Yup.string().required('O endereço é obrigatório'),
    cidade: Yup.string().required('A cidade é obrigatória'),
    cep: Yup.string()
      .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
      .required('O CEP é obrigatório'),
    numero: Yup.number()
      .typeError('O número deve ser válido')
      .required('O número é obrigatório')
  })

  const handleSubmit = (values: any) => {
    console.log('Dados do formulário:', values)
  }

  const handleVoltar = () => {
    dispatch(voltarParaCarrinho())
  }

  return (
    <Overlay>
      <BarraLateral>
        <CheckoutContainer>
          <h2>Entrega</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Campo>
                <label htmlFor="nome">Quem irá receber?</label>
                <Field type="text" id="nome" name="nome" />
                <ErrorMessage component={CampoErro} name="nome" />
              </Campo>

              <Campo>
                <label htmlFor="endereco">Endereço</label>
                <Field type="text" id="endereco" name="endereco" />
                <ErrorMessage component={CampoErro} name="endereco" />
              </Campo>

              <Campo>
                <label htmlFor="cidade">Cidade</label>
                <Field type="text" id="cidade" name="cidade" />
                <ErrorMessage component={CampoErro} name="cidade" />
              </Campo>

              <Container>
                <Campo>
                  <label htmlFor="cep">CEP</label>
                  <Field type="text" id="cep" name="cep" />
                  <ErrorMessage component={CampoErro} name="cep" />
                </Campo>

                <Campo>
                  <label htmlFor="numero">Número</label>
                  <Field type="text" id="numero" name="numero" />
                  <ErrorMessage component={CampoErro} name="numero" />
                </Campo>
              </Container>

              <Campo>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <Field type="text" id="complemento" name="complemento" />
              </Campo>

              <BotaoSubmit type="submit">Continuar com o pagamento</BotaoSubmit>
            </Form>
          </Formik>
          <BotaoVoltar onClick={handleVoltar}>
            Voltar para o carrinho
          </BotaoVoltar>
        </CheckoutContainer>
      </BarraLateral>
    </Overlay>
  )
}

export default Checkout
