import { useEffect, useState } from 'react'
import { FormContainer, FormTitle } from './StyledLogin'
import axios from 'axios'
function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault(e)

    try {
      const response = await axios.post("http://localhost:8080/user/login", {email, password,})
      console.log(response.data.role)

      if(response.status == 200){
        const userType = response.data.role
        window.location.href = userType === "ROLE_ADMIN" ? "/admin" : "/userContext";
      }
    } catch (error) {
      console.log(error)
      
    }
    
  }

  return (
    <div>
      <FormTitle>Conecte-se</FormTitle>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type='text'
          name='email'
          id='email'
          required
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />


        <label htmlFor="password">Senha</label>
        <input
          type='password'
          name='password'
          id='password'
          required
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button>Entrar</button>
      </FormContainer>
    </div>
  )
}

export default Login
