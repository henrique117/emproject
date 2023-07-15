import { colors } from "../../styles/GlobalStyle";
import CSS from 'csstype'

export const main: CSS.Properties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    backgroundColor: colors.bgColor,
}

export const login: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: "2rem",
    height: "100vh"
}

export const tittle: CSS.Properties = {
    display: "flex",
    width: "100%",
    height: "40vh",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "3rem",
    marginTop: "3rem"
}

export const h1: CSS.Properties = {
    fontSize: "64px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    color: colors.bgGreenColor,
    textAlign: "center"
}

export const inputs: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
}

export const input: CSS.Properties = {
    display: "flex",
    paddingInline: "0.5",
    padding: "1rem",
    marginBottom: "4rem",
    backgroundColor: "#EFEFEF",
    borderStyle: "none",
    borderRadius: "5px",
    boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "normal",
    color: "#97A4A2"
}

export const p: CSS.Properties = {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    color: "#97A4A2"
}