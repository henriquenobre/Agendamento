import React from 'react'
import { ButtonWhite } from '../../styles/button'
import { Input, LoginInput } from '../../styles/input'
import {
  CreateLogin,
  LoginBackground,
  LoginBackgroundImg,
  LoginBody,
  LoginForm,
  Logintitle,
  Separetor,
  SeparetorLine
} from '../../styles/login'

const Login: React.FC = () => {
  return (
    <LoginBody>
      <LoginBackground>
        <LoginBackgroundImg src="img/background-login.png" />
      </LoginBackground>
      <LoginForm>
        <Logintitle>Agenda Show</Logintitle>
        <ButtonWhite>
          <img src="img/google-icon.svg" alt="" />
          Login with Google
        </ButtonWhite>
        <Separetor>
          <SeparetorLine></SeparetorLine>
        </Separetor>
        <LoginInput>
          <img src="img/mail.png" alt="" />
          <Input type="email" placeholder="Email" />
        </LoginInput>
        <LoginInput>
          <img src="/img/key.png" alt="" />
          <Input type="password" placeholder="Senha" />
        </LoginInput>
        <CreateLogin>Criar conta</CreateLogin>
      </LoginForm>
    </LoginBody>
  )
}

export default Login
