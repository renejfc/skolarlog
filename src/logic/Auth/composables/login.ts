import { useMessage } from 'naive-ui'
import { useAuth } from '~/logic/Auth/composables/auth'

const model = reactive({
  email: '',
  password: '',
})

const rules = {
  email: {
    required: true,
    message: 'Por favor, introduce tu email',
    trigger: ['input'],
  },
  password: {
    required: true,
    message: 'Por favor, introduce tu contraseña',
    trigger: ['input'],
  },
}

export function useLogin() {
  const { error } = useMessage()
  const { signIn } = useAuth()

  async function handleLogin() {
    const { error: apiError } = await signIn({
      email: model.email,
      password: model.password,
    })

    if (apiError) error(`${apiError.message} (${apiError.status})`)
    else window.location.href = '/'
  }

  function handleValidate(e: any, ref: HTMLElement | null) {
    e.preventDefault()
    // @ts-ignore
    ref.validate((errors) => {
      if (!errors)
        return handleLogin()

      console.error(errors)
    })
  }

  return {
    model,
    rules,
    handleValidate,
  }
}
