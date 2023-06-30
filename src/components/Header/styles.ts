import { colors } from "../../styles/GlobalStyle";
import CSS from 'csstype'

export const main: CSS.Properties = {
    backgroundColor: colors.bgColor,
    display: "flex",
    maxHeight: "100px",
    maxWidth: "100%",
    justifyContent: "space-between",
    alignItems: "center",
}

export const imagem: CSS.Properties = {
    maxHeight: "100px",
    paddingInline: "30px"
}

export const lista: CSS.Properties = {
    width: "100%",
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
}

export const pesquisa: CSS.Properties = {
    backgroundColor: colors.boxColor,
    height: "40px",
    width: "165px",
    borderRadius: "15px",
    borderStyle: "none",
    paddingInline: "20px"
}

export const divPesquisa: CSS.Properties = {
    height: "100px",
    alignItems: "center",
    display: "flex",
    paddingInline: "30px",
}

export const texto: CSS.Properties = {
    color: colors.textColor,
    fontSize: "32px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "lighter",
    lineHeight: "normal",
    height: "39px",
    textAlign: "justify",
    paddingInline: "20px",
}