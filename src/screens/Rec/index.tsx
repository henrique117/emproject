import { useNavigate } from "react-router-dom"
import imgLogin from "../../assets/imgLogin.png"
import setinha from "../../assets/setinha.png"
import { h1, input, inputs, login, main, p, tittle } from "./styles"

export default function Rec() {

    const navigate = useNavigate()

    function handleRegister() {
        navigate('/register')
    }
    function handleLogin() {
        navigate('/login')
    }

    return (
        <>
            <div style={main}>
                <div style={login}>
                    <div style={tittle}>
                        <h1 style={h1}>Recuperar Conta</h1>
                    </div>
                    <div style={inputs}>
                        <input type="text" placeholder="E-mail" style={input}/>
                    </div>
                    <div style={{display: "flex", width: "100%", justifyContent: "flex-end"}}>
                        <img src={setinha} alt="sett" />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "flex-end",
                        paddingBottom: "3rem"
                    }}>
                        <p style={p} onClick={handleRegister}>Criar Conta</p>
                        <p style={p} onClick={handleLogin}>Fazer Login</p>
                    </div>
                </div>
                <img src={imgLogin} alt="" style={{
                    display: "flex",
                    maxWidth: "60%",
                    marginLeft: "1rem"
                }}/>
            </div>
        </>
    )
}