import { colors } from "../../styles/GlobalStyle";
import CSS from 'csstype'

export const main: CSS.Properties = {
    height: "100vh",
    backgroundColor: colors.bgColor,
    display: "flex",
    flexDirection: "column"
}

export const games: CSS.Properties = {
    display: "flex",
    backgroundColor: colors.bgGreenColor,
    width: "40%",
    flexDirection: "column",
    height: "89.7vh"
}

export const divGames: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    width: "80%",
}

export const h1: CSS.Properties = {
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    color: colors.bgGreenColor,
    paddingBottom: "35px",
}

export const h2: CSS.Properties = {
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    color: colors.bgGreenColor,
    paddingBottom: "25px",
}

export const button: CSS.Properties = {
    display: "flex",
    width: "43%",
    marginBottom: "25px",
    padding: "7px",
    backgroundColor: colors.bgGreenColor,
    border: "none",
    borderRadius: "10px",
    color: colors.bgColor,
}

export const button2: CSS.Properties = {
    display: "flex",
    width: "43%",
    marginBottom: "25px",
    padding: "7px",
    backgroundColor: "#a3acae",
    border: "none",
    borderRadius: "10px",
    color: colors.bgColor,
}

export const p: CSS.Properties = {
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    color: colors.bgColor,
}

export const textAv: CSS.Properties = {
    fontSize: "18px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    color: colors.bgColor
}