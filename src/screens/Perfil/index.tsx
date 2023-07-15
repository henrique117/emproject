import { HeaderComp } from "../../components/components"
import manoel from "../../assets/manoel.png"
import osu from "../../assets/osu.png"
import carrinho from "../../assets/carrinho.png"
import valorant from "../../assets/valorant.png"
import subnautica from "../../assets/subnautica.png"
import astroneer from "../../assets/astroneer.png"
import { games, main, info, infos, h1, h2, button, button2, divGames, p, textAv } from "./styles"
import { colors } from "../../styles/GlobalStyle"
import { useNavigate } from "react-router-dom"
import { HiPencil } from "react-icons/hi"
import { BiSolidTrash } from "react-icons/bi"

export default function Perfil() {

    const navigate = useNavigate()

    function handleCarrinho() {
        navigate("/carrinho")
    }

    return (
        <>
            <div style={main}>
                <HeaderComp />
                <div style={{display: "flex"}}>
                    <div style={info}>
                        <div style={infos}>
                            <h1 style={h1}>Olá, Nome do Usuário</h1>
                            <h2 style={h2}>Seu email é nomeusuario@email.com</h2>
                            <h2 style={h2}>Seu CPF é 123.456.789-00</h2>
                            <button style={button}>
                                <p style={p}>Aterar Dados</p>
                                <HiPencil style={{
                                    width: "35px",
                                    height: "35px"
                                }}/>
                            </button>
                            <button style={button}>
                                <p style={p}>Excluir conta</p>
                                <BiSolidTrash style={{
                                    width: "35px",
                                    height: "35px"
                                }}/>
                            </button>
                            <button style={button2}>
                                <p style={p}>Tela do admin</p>
                            </button>
                        </div>
                    </div>
                    <div style={games}>
                        <div style={{ width: "100%", display: "flex", height: "30%", alignItems: "flex-end" }}>
                            <h2 style={{
                                marginLeft: "3rem",
                                fontSize: "36px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                color: colors.bgColor
                            }}>Jogos Adiquiridos: </h2>
                        </div>
                        <div style={{ display: "flex", height: "100vh" }}>
                            <div style={divGames}>
                                <img src={osu} alt="osu" style={{height: "60%", width: "60%"}} />
                                <p style={textAv}>99/100</p>
                            </div>
                            <div style={divGames}>
                                <img src={valorant} alt="gomes" style={{height: "60%", width: "60%"}} />
                                <p style={textAv}>2/100</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", height: "100vh" }}>
                            <div style={divGames}>
                                <img src={subnautica} alt="gomes" style={{height: "60%", width: "60%"}} />
                                <p style={textAv}>Adicionar Avaliação</p>
                            </div>
                            <div style={divGames}>
                                <img src={astroneer} alt="gomes" style={{height: "60%", width: "60%"}} />
                                <p style={textAv}>110/100</p>
                            </div>
                        </div>
                        <img src={carrinho} alt="botao carrinho" onClick={handleCarrinho} style={{
                            height: "75px",
                            width: "75px",
                            position: "absolute",
                            bottom: "20px",
                            right: "240px"
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}