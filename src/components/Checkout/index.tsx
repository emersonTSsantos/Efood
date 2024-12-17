import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  BotaoVoltar,
  Campo,
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
  const [step, setStep] = useState(1)

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      DonoCartao: '',
      numeroCartao: '',
      codigoCartao: '',
      mesExpiracao: '',
      anoExpiracao: ''
    },
    validationSchema: Yup.object({
      // Dados Cliente
      nome: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .length(9, 'CEP inválido')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      complemento: Yup.string(),

      // Pagamento com cartão
      DonoCartao: Yup.string().when((_, schema) =>
        step === 2 ? schema.required('O campo é obrigatório') : schema
      ),
      numeroCartao: Yup.string().when((_, schema) =>
        step === 2 ? schema.required('O campo é obrigatório') : schema
      ),
      codigoCartao: Yup.string().when((_, schema) =>
        step === 2 ? schema.required('O campo é obrigatório') : schema
      ),
      mesExpiracao: Yup.string().when((_, schema) =>
        step === 2 ? schema.required('O campo é obrigatório') : schema
      ),
      anoExpiracao: Yup.string().when((_, schema) =>
        step === 2 ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getMensagemDeErro = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <BarraLateral>
        <CheckoutContainer>
          {step === 1 && (
            <>
              <Titulo>Entrega</Titulo>

              <Campo>
                <label htmlFor="nome">Quem irá receber?</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.values.nome}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getMensagemDeErro('nome')}</small>
              </Campo>

              <Campo>
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getMensagemDeErro('endereco')}</small>
              </Campo>

              <Campo>
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getMensagemDeErro('cidade')}</small>
              </Campo>

              <Container>
                <Campo>
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('cep')}</small>
                </Campo>

                <Campo>
                  <label htmlFor="numero">Número</label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('numero')}</small>
                </Campo>
              </Container>

              <Campo>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getMensagemDeErro('complemento')}</small>
              </Campo>

              <BotaoSubmit type="button" onClick={() => setStep(2)}>
                Continuar
              </BotaoSubmit>
            </>
          )}

          {step === 2 && (
            <>
              <Titulo>
                Pagamento - Valor a pagar R$<span>190,90</span>
              </Titulo>

              <Campo>
                <label htmlFor="DonoCartao">Nome no Cartão</label>
                <input
                  type="text"
                  id="DonoCartao"
                  name="DonoCartao"
                  value={form.values.DonoCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getMensagemDeErro('DonoCartao')}</small>
              </Campo>

              <ContainerCartao>
                <Campo>
                  <label htmlFor="numeroCartao">Número do Cartão</label>
                  <input
                    type="text"
                    id="numeroCartao"
                    name="numeroCartao"
                    value={form.values.numeroCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('numeroCartao')}</small>
                </Campo>

                <Campo>
                  <label htmlFor="codigoCartao">CVV</label>
                  <input
                    type="text"
                    id="codigoCartao"
                    name="codigoCartao"
                    value={form.values.codigoCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('codigoCartao')}</small>
                </Campo>
              </ContainerCartao>

              <ContainerCartao>
                <Campo>
                  <label htmlFor="mesExpiracao">Mês de vencimento</label>
                  <input
                    type="text"
                    id="mesExpiracao"
                    name="mesExpiracao"
                    value={form.values.mesExpiracao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('mesExpiracao')}</small>
                </Campo>

                <Campo>
                  <label htmlFor="anoExpiracao">Ano de vencimento</label>
                  <input
                    type="text"
                    id="anoExpiracao"
                    name="anoExpiracao"
                    value={form.values.anoExpiracao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('anoExpiracao')}</small>
                </Campo>
              </ContainerCartao>

              <BotaoSubmit type="button" onClick={() => setStep(3)}>
                Finalizar pagamento
              </BotaoSubmit>
              <BotaoSubmit type="button" onClick={() => setStep(1)}>
                Voltar para a edição de endereço
              </BotaoSubmit>
            </>
          )}

          {step === 3 && (
            <>
              <Titulo>Pedido realizado!</Titulo>
              <Paragrafo>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </Paragrafo>
              <Paragrafo>
                Nossos entregadores não estão autorizados a realizar cobranças
                extras.
              </Paragrafo>
              <Paragrafo>
                Lembre-se de higienizar as mãos após o recebimento do pedido.
              </Paragrafo>
              <Paragrafo>
                Esperamos que desfrute de uma deliciosa experiência
                gastronômica.
              </Paragrafo>
              <BotaoVoltar to="/">Concluir</BotaoVoltar>
            </>
          )}
        </CheckoutContainer>
      </BarraLateral>
    </form>
  )
}

export default Checkout
