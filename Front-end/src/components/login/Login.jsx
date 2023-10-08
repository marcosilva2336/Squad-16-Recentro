import { FormContainer, FormTitle } from './StyledLogin'

function Login() {
  return (
    <div>
      <FormTitle>Conecte-se</FormTitle>
      <FormContainer>
        <label htmlFor="email">E-mail</label>
        <input
          type='text'
          name='email'
          id='email'
        />
        <label htmlFor="password">Senha</label>
        <input
          type='password'
          name='password'
          id='password'
        />
        <button>Entrar</button>
      </FormContainer>
    </div>
  )
}

export default Login
