import imgHeader from "../../assets/imgHeader.png"
import { divPesquisa, imagem, lista, main, pesquisa, texto } from "./styles"

export default function Header() {
    return (
        <>
            <div style={main}>
                <img src={imgHeader} alt="Imagem do Header" style={imagem}/>
                <ul style={lista}>
                    <li>
                        <h2 style={texto}>Lançamentos</h2>
                    </li>
                    <li>
                        <h2 style={texto}>Populares</h2>
                    </li>
                    <li>
                        <h2 style={texto}>Gêneros</h2>
                    </li>
                    <li>
                        <h2 style={texto}>Promoções</h2>
                    </li>
                    <li>
                        <h2 style={texto}>Conta</h2>
                    </li>
                </ul>
                <div style={divPesquisa}>
                    <input type="text" alt="SearchBar" style={pesquisa} />
                </div>
            </div>
        </>
    )
}