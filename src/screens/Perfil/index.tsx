import { HeaderComp } from "../../components/components"
import { games, main, info, infos, h1, h2, button, button2 } from "./styles"

export default function Perfil() {
    return (
        <>
            <HeaderComp />
            <div style={main}>
                <div style={info}>
                    <div style={infos}>
                        <h1 style={h1}>Olá, Nome do Usuário</h1>
                        <h2 style={h2}>Seu email é nomeusuario@email.com</h2>
                        <h2 style={h2}>Seu CPF é 123.456.789-00</h2>
                        <button style={button}>
                            <p>Aterar Dados</p>
                        </button>
                        <button style={button}>
                            <p>Excluir conta</p>
                        </button>
                        <button style={button2}>
                            <p>Tela do admin</p>
                        </button>
                    </div>
                </div>
                <div style={games}>

                </div>
            </div>
        </>
    )
}