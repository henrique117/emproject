import { colors } from "../../styles/GlobalStyle";
import CSS from 'csstype'

export const main: CSS.Properties = {
    height: "100vh",
    backgroundColor: colors.bgGreenColor,
    display: "flex",
    flexDirection: "column"
}

export const pay: CSS.Properties = {
    display: "flex",
    backgroundColor: colors.bgColor,
    width: "65%",
    flexDirection: "column",
    alignItems: "center",
    height: "89.7vh",
}

export const compras: CSS.Properties = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
}

export const tittle: CSS.Properties = {
    height: "13vh",
    display: "flex",
    alignItems: "center",
    width: "100%"
}

export const h1: CSS.Properties = {
    marginLeft: "50px",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    color: colors.bgColor
}

export const jogos: CSS.Properties = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

export const jogo: CSS.Properties = {
    display: "flex",
    height: "35%",
    width: "50%",
    marginBottom: "13px",
    marginTop: "17px",
    justifyContent: "space-between"
}

export const preco: CSS.Properties = {
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    color: "#FFF"
}

export const h2: CSS.Properties = {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    color: "#FFF",
    textAlign: "justify"
}

export const p: CSS.Properties = {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    color: "#FFF"
}

export const total: CSS.Properties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    paddingTop: "1rem",
    borderTopStyle: "solid",
    borderTopColor: "#FFF",
}

export const h1P: CSS.Properties = {
    marginLeft: "50px",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    color: colors.bgGreenColor,
}

export const pagamento: CSS.Properties = {
    width: "70%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

export const eachPag: CSS.Properties = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "3rem",
    paddingTop: "3.5rem",
}

export const check: CSS.Properties = {
    height: "20px",
    width: "20px",
    backgroundColor: "#A097A4",
    borderRadius: "50%"
}

export const pP: CSS.Properties = {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    color: colors.bgGreenColor,
    paddingLeft: "1.5rem"
}

export const button: CSS.Properties = {
    display: "flex",
    backgroundColor: colors.bgGreenColor,
    border: "none",
    borderRadius: "5px",
    color: colors.bgColor,
    padding: "13px",
    paddingInline: "30px",
    marginTop: "2rem",
    alignItems: "center",
    justifyContent: "space-between"
}

export const bText: CSS.Properties = {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
}