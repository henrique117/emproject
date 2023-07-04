import { colors } from "../../styles/GlobalStyle";
import CSS from 'csstype'

export const main: CSS.Properties = {
    height: "85vh",
    backgroundColor: colors.bgColor,
    display: "flex",
}

export const games: CSS.Properties = {
    backgroundColor: colors.bgGreenColor,
    width: "40%",
}

export const info: CSS.Properties = {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

export const infos: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    width: "80%"
}

export const h1: CSS.Properties = {
    fontSize: "48px",
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: "500",
    lineHeight: "normal",
    color: colors.bgGreenColor,
    paddingBottom: "35px"
}

export const h2: CSS.Properties = {
    fontSize: "32px",
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: "400",
    lineHeight: "normal",
    color: colors.bgGreenColor,
    paddingBottom: "25px"
}

export const button: CSS.Properties = {
    width: "30%",
    marginBottom: "25px",
    padding: "7px",
    backgroundColor: colors.bgGreenColor,
    border: "none",
    borderRadius: "10px"
}

export const button2: CSS.Properties = {
    width: "30%",
    marginBottom: "25px",
    padding: "7px",
    backgroundColor: "#a3acae",
    border: "none",
    borderRadius: "10px"
}

export const p: CSS.Properties = {
    fontSize: "30px",
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: "400",
    lineHeight: "normal",
    color: colors.bgColor,
}