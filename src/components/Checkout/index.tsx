import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import { RootState } from '../../store'
import {
  voltarParaCarrinho,
  fecharCheckout,
  limparCarrinho
} from '../../store/reducers/carrinho'

import {
  BotaoVoltar,
  Campo,
  BotaoSubmit,
  Container,
  ContainerCartao,
  Titulo,
  Paragrafo,
  CheckoutContainer,
  BarraLateral,
  Overlay
} from './styles'
import axios from 'axios'

interface CheckoutResponse {
  isSuccess: boolean
  orderId?: string
}

const Checkout = () => {
  const { total } = useSelector((state: RootState) => state.carrinho)

  const dispatch = useDispatch()
  const handleConcluir = () => {
    // Limpar o carrinho
    dispatch(limparCarrinho())

    // Fechar o checkout e voltar para a página inicial
    dispatch(fecharCheckout())
  }

  const [step, setStep] = useState(1)
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false)
  const [checkoutResponse, setCheckoutResponse] =
    useState<CheckoutResponse | null>(null)

  useEffect(() => {
    if (checkoutResponse) {
      console.log('Checkout Response:', checkoutResponse)
    }
  }, [checkoutResponse])

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
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('O campo é obrigatório'),
      numero: Yup.number().required('O campo é obrigatório'),

      // Pagamento com cartão
      DonoCartao: Yup.string().required('O campo é obrigatório'),
      numeroCartao: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido')
        .required('O campo é obrigatório'),
      codigoCartao: Yup.string()
        .length(3, 'CVV deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      mesExpiracao: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('O campo é obrigatório'),
      anoExpiracao: Yup.string()
        .matches(/^\d{4}$/, 'Ano inválido')
        .required('O campo é obrigatório')
        .test(
          'ano-valido',
          'Ano de vencimento deve ser maior ou igual ao ano atual',
          (value) => {
            const currentYear = new Date().getFullYear()
            return parseInt(value || '0') >= currentYear
          }
        )
    }),
    onSubmit: (values) => {
      handleCheckout(values)
    }
  })

  const handleCheckout = async (values: typeof form.values) => {
    setIsLoadingCheckout(true)

    try {
      const response = await axios.post(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          delivery: {
            receiver: values.nome,
            address: {
              description: values.endereco,
              city: values.cidade,
              zipCode: values.cep,
              number: Number(values.numero),
              complement: values.complemento
            }
          },
          payment: {
            card: {
              name: values.DonoCartao,
              number: values.numeroCartao,
              code: Number(values.codigoCartao),
              expires: {
                month: Number(values.mesExpiracao),
                year: Number(values.anoExpiracao)
              }
            }
          },
          products: [
            {
              id: 1,
              price: 10
            }
          ]
        }
      )

      console.log(checkoutResponse)
      console.log(response.data)

      setCheckoutResponse(response.data)
      setStep(3)
    } catch (error) {
      console.error('Erro ao realizar o pedido:', error)
    } finally {
      setIsLoadingCheckout(false)
    }
  }

  const getMensagemDeErro = (fieldName: keyof typeof form.values) => {
    const estaAlterado = form.touched[fieldName]
    const estaInvalido = form.errors[fieldName]

    if (estaAlterado && estaInvalido) return estaInvalido
    return ''
  }

  const isStepValid = () => {
    if (step === 1) {
      return (
        form.values.nome &&
        form.values.endereco &&
        form.values.cidade &&
        form.values.cep &&
        form.values.numero &&
        !Object.keys(form.errors).some((field) =>
          ['nome', 'endereco', 'cidade', 'cep', 'numero'].includes(field)
        )
      )
    }
    if (step === 2) {
      return (
        form.values.DonoCartao &&
        form.values.numeroCartao &&
        form.values.codigoCartao &&
        form.values.mesExpiracao &&
        form.values.anoExpiracao &&
        !Object.keys(form.errors).some((field) =>
          [
            'DonoCartao',
            'numeroCartao',
            'codigoCartao',
            'mesExpiracao',
            'anoExpiracao'
          ].includes(field)
        )
      )
    }
    return false
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <Overlay />
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
                  disabled={isLoadingCheckout}
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
                  disabled={isLoadingCheckout}
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
                  disabled={isLoadingCheckout}
                />
                <small>{getMensagemDeErro('cidade')}</small>
              </Campo>

              <Container>
                <Campo>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    mask="99999-999"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    disabled={isLoadingCheckout}
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
                    disabled={isLoadingCheckout}
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
                  disabled={isLoadingCheckout}
                />
                <small>{getMensagemDeErro('complemento')}</small>
              </Campo>

              <BotaoSubmit
                type="button"
                onClick={() => {
                  form.submitForm()
                  if (isStepValid()) {
                    setStep(2)
                  }
                }}
                disabled={isLoadingCheckout}
              >
                Continuar
              </BotaoSubmit>

              <BotaoSubmit
                type="button"
                onClick={() => dispatch(voltarParaCarrinho())}
              >
                Voltar para o carrinho
              </BotaoSubmit>
            </>
          )}

          {step === 2 && (
            <>
              <Titulo>
                Pagamento - Valor a pagar R$<span>{total.toFixed(2)}</span>
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
                  disabled={isLoadingCheckout}
                />
                <small>{getMensagemDeErro('DonoCartao')}</small>
              </Campo>

              <ContainerCartao>
                <Campo>
                  <label htmlFor="numeroCartao">Número do Cartão</label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    id="numeroCartao"
                    name="numeroCartao"
                    value={form.values.numeroCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    disabled={isLoadingCheckout}
                  />
                  <small>{getMensagemDeErro('numeroCartao')}</small>
                </Campo>

                <Campo>
                  <label htmlFor="codigoCartao">CVV</label>
                  <InputMask
                    mask="999"
                    id="codigoCartao"
                    name="codigoCartao"
                    value={form.values.codigoCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    disabled={isLoadingCheckout}
                  />
                  <small>{getMensagemDeErro('codigoCartao')}</small>
                </Campo>
              </ContainerCartao>

              <ContainerCartao>
                <Campo>
                  <label htmlFor="mesExpiracao">Mês de vencimento</label>
                  <InputMask
                    mask="99"
                    id="mesExpiracao"
                    name="mesExpiracao"
                    value={form.values.mesExpiracao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    disabled={isLoadingCheckout}
                  />
                  <small>{getMensagemDeErro('mesExpiracao')}</small>
                </Campo>

                <Campo>
                  <label htmlFor="anoExpiracao">Ano de vencimento</label>
                  <InputMask
                    mask="9999"
                    id="anoExpiracao"
                    name="anoExpiracao"
                    value={form.values.anoExpiracao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    disabled={isLoadingCheckout}
                  />
                  <small>{getMensagemDeErro('anoExpiracao')}</small>
                </Campo>
              </ContainerCartao>

              <BotaoSubmit
                type="submit"
                disabled={isLoadingCheckout || !isStepValid()}
              >
                Finalizar Compra
              </BotaoSubmit>
              <BotaoSubmit
                type="button"
                onClick={() => setStep(1)}
                disabled={isLoadingCheckout}
              >
                Voltar para a edição de endereço
              </BotaoSubmit>
            </>
          )}

          {step === 3 && checkoutResponse && (
            <>
              <Titulo>
                Pedido realizado! - {checkoutResponse.orderId || 'N/A'}
              </Titulo>
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
              <BotaoVoltar to="/" onClick={handleConcluir}>
                Concluir
              </BotaoVoltar>
            </>
          )}
        </CheckoutContainer>
      </BarraLateral>
    </form>
  )
}

export default Checkout
