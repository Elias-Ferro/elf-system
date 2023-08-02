import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    max-width: 100vw;
`
export const LoginContainer = styled.div`
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 500px;
    margin: 50px 50px;
    border-radius: 15px;
    color: #0091bd;
    animation: bright 1000ms infinite alternate;

    form  {
        background: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        span {
            background: none;
        }

        input {
            background-color: #2b2b2b;
            border: none;
            border-radius: 20px;
            height: 25px;
            padding: 0 20px;
            outline: none;
            color: #00a4d6;
        }
    }

@keyframes bright {
    0% {
        box-shadow: 0px 0px 1px 1px #0082aa;
    }
    100% {
        box-shadow: 0px 0px 4px 1px #00e1ff;
    }
    
}
`

export const TitleLogin = styled.h1`
    background: none;
    text-align: center;
    color: #0082aa;
    padding: 30px;

    p {
        background: none;
        text-align: center;
        font-size: 16px;
        color: #4d4d4d;
        padding: 5px;
    }

    hr {
        border: none;
        border-top: 2px solid #2b2b2b;
        width: 250px;
        margin-top: 10px;
    }
`