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
    bgColor: "#FFC2E1D9",
    white: "ffffff",
    black: "000000"
}