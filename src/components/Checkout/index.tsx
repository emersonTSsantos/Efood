import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import {
  BotaoVoltar,
  Campo,
  CampoErro,
  BotaoSubmit,
  Container,
  ContainerCartao,
  Titulo,
  Paragrafo,
  CheckoutContainer,
  BarraLateral
} from './styles'

const Checkout = () => {
  const dispatch = useDispatch()
  const [step, setStep] = useState(1) // Estado para controlar a etapa

  const initialValues = {
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: '',
    pagamento: ''
  }

  const validationSchemas = [
    Yup.object({
      nome: Yup.string().required('O nome é obrigatório'),
      endereco: Yup.string().required('O endereço é obrigatório'),
      cidade: Yup.string().required('A cidade é obrigatória'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('O CEP é obrigatório'),
      numero: Yup.number()
        .typeError('O número deve ser válido')
        .required('O número é obrigatório')
    }),
    Yup.object({
      pagamento: Yup.string().required('Escolha uma forma de pagamento')
    })
  ]

  const handleSubmit = (values: any) => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log('Finalizando pedido:', values)
      dispatch({ type: 'FINALIZAR_PEDIDO', payload: values })
    }
  }

  return (
    <BarraLateral>
      <CheckoutContainer>
        {step === 1 && (
          <>
            <Titulo>Entrega</Titulo>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchemas[0]}
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

                <BotaoSubmit type="submit">Continuar</BotaoSubmit>
              </Form>
            </Formik>
          </>
        )}

        {step === 2 && (
          <>
            <Titulo>
              Pagamento - Valor a pagar R$<span>190,90</span>
            </Titulo>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchemas[1]}
              onSubmit={handleSubmit}
            >
              <Form>
                <Campo>
                  <label htmlFor="DonoCartao">Nome no Cartão</label>
                  <Field type="text" id="DonoCartao" name="DonoCartao" />
                  <ErrorMessage component={CampoErro} name="DonoCartao" />
                </Campo>

                <ContainerCartao>
                  <Campo>
                    <label htmlFor="numeroCartao">Número do Cartão</label>
                    <Field type="text" id="numeroCartao" name="numeroCartao" />
                    <ErrorMessage component={CampoErro} name="numeroCartao" />
                  </Campo>

                  <Campo>
                    <label htmlFor="codigoCartao">CVV</label>
                    <Field type="text" id="codigoCartao" name="codigoCartao" />
                    <ErrorMessage component={CampoErro} name="codigoCartao" />
                  </Campo>
                </ContainerCartao>

                <ContainerCartao>
                  <Campo>
                    <label htmlFor="mesExpiracao">Mês de vencimento</label>
                    <Field type="text" id="mesExpiracao" name="mesExpiracao" />
                    <ErrorMessage component={CampoErro} name="mesExpiracao" />
                  </Campo>

                  <Campo>
                    <label htmlFor="anoExpiracao">Ano de vencimento</label>
                    <Field type="text" id="anoExpiracao" name="anoExpiracao" />
                    <ErrorMessage component={CampoErro} name="anoExpiracao" />
                  </Campo>
                </ContainerCartao>
              </Form>
            </Formik>
            <BotaoSubmit onClick={() => setStep(step + 1)}>
              Finalizar pagamento
            </BotaoSubmit>
            <BotaoSubmit onClick={() => setStep(step - 1)}>
              Voltar para a edição de endereço
            </BotaoSubmit>
          </>
        )}

        {step === 3 && (
          <>
            <Titulo>
              Pedido realizado - <span>id</span>
            </Titulo>
            <Paragrafo>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </Paragrafo>
            <Paragrafo>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </Paragrafo>
            <Paragrafo>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </Paragrafo>
            <Paragrafo>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Paragrafo>
            <BotaoVoltar to={'/'}>Concluir</BotaoVoltar>
          </>
        )}
      </CheckoutContainer>
    </BarraLateral>
  )
}

export default Checkout
