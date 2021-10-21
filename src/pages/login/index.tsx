import React from 'react'
import { Lineback, LoginBackground, LoginBackgroundImg, LoginBody, LoginForm } from '../../styles/login'

const Login: React.FC = () => {
    return (
        <LoginBody>
            <LoginBackground>
                <Lineback src="img/line.svg" />
                <Lineback src="img/line.svg" />
                <Lineback src="img/line.svg" />
                <LoginBackgroundImg src="img/background-login.png" />
            </LoginBackground>

            <LoginForm>
                <h1>TODO</h1>
            </LoginForm>
        </LoginBody>
    )
}

export default Login
