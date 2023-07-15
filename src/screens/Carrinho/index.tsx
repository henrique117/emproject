import { HeaderComp } from "../../components/components"
import manoel from "../../assets/manoel.png"
import pix from "../../assets/pix.png"
import { compras, h1, h2, jogo, jogos, main, pay, preco, tittle, p, total, h1P, pagamento, eachPag, check, pP, button, bText } from "./styles"
import { colors } from "../../styles/GlobalStyle"

export default function Carrinho() {

    return (
        <>
            <div style={main}>
                <HeaderComp />
                <div style={{display: "flex"}}>
                    <div style={compras}>
                        <div style={tittle}>
                            <h1 style={h1}>Carrinho de Compras</h1>
                        </div>
                        <div style={jogos}>
                            <div style={jogo}>
                                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                    <div>
                                        <h2 style={h2}>Manoel</h2>
                                        <p style={p}>Vc ta beeeemmm</p>
                                    </div>
                                    <h1 style={preco}>R$ 9999,99</h1>
                                </div>
                                <div style={{ height: "100%", display: "flex", justifyContent: "flex-end", marginLeft: "0.1rem" }}>
                                    <img src={manoel} alt="caneta" />
                                </div>
                            </div>
                            <div style={jogo}>
                                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                    <div>
                                        <h2 style={h2}>Gomes</h2>
                                        <p style={p}>Como ce taaaaa</p>
                                    </div>
                                    <h1 style={preco}>R$ 9999,99</h1>
                                </div>
                                <div style={{ height: "100%", display: "flex", justifyContent: "flex-end", marginLeft: "0.1rem" }}>
                                    <img src={manoel} alt="azul" />
                                </div>
                            </div>
                            <div style={total}>
                                <h1 style={preco}>R$ 999999,99</h1>
                                <h1 style={preco}>Total</h1>
                            </div>
                        </div>
                    </div>
                    <div style={pay}>
                        <div style={tittle}>
                            <h1 style={h1P}>Método de pagamento</h1>
                        </div>
                        <div style={pagamento}>
                            <div style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingBottom: "3rem",
                                paddingTop: "6rem",
                                borderBottomStyle: "solid",
                                borderBottomColor: colors.bgGreenColor
                            }}>
                                <img src={pix} alt="pix" />
                                <h2 style={{ marginInline: "1.7rem" }}>Pix</h2>
                                {/* <input type="checkbox"/> */}
                                <span style={check}></span>
                            </div>
                            <div style={eachPag}>
                                {/* <input type="checkbox"/> */}
                                <span style={check}></span>
                                <p style={pP}>Eu aceito os termos e condições</p>
                            </div>
                            <div>
                                <button style={button}>
                                    <p style={bText}>Finalizar Compra</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}