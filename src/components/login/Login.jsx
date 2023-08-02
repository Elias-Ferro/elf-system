import React from "react";

import { Container, LoginContainer, TitleLogin } from '../../style/login.jsx'

function Login() {
    return (
        <Container>
            <LoginContainer>
                <TitleLogin>ElF System
                    <p>Elias Ferro Sistema <br />
                        Automação Comercial</p>
                    <hr />
                </TitleLogin>
                <form>
                    <span>Entrar</span>

                    <input type="e-mail" name="nome" placeholder="e-mail" />
                    <input type="password" name="nome" placeholder="senha" />
                </form>
            </LoginContainer>
        </Container>
    );
};

export default Login;