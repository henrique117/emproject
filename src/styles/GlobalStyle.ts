import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 100%;
    }

    body {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }


`

export const colors = {
    fontColor: "#3B232F",
    borderColor: "#003396",
    bgColor: "#FBF6F0",
    white: "ffffff",
    black: "000000",
    boxColor: "rgba(151, 164, 162, 0.45)",
    boxShadowColor: "rgba(0, 0, 0, 1)",
    textColor: "#4B626C",
}