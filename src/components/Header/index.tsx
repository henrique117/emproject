import { useNavigate } from "react-router-dom"
import imgHeader from "../../assets/imgHeader.png"
import { divPesquisa, imagem, li, lista, main, pesquisa, texto } from "./styles"

export default function Header() {

    const navigate = useNavigate()

    function handlePerfil() {
        navigate('/perfil')
    }

    return (
        <>
            <div style={main}>
                <img src={imgHeader} alt="Imagem do Header" style={imagem}/>
                <ul style={lista}>
                    <li style={li}>
                        <h2 style={texto}>Lançamentos</h2>
                    </li>
                    <li style={li}>
                        <h2 style={texto}>Populares</h2>
                    </li>
                    <li style={li}>
                        <h2 style={texto}>Gêneros</h2>
                    </li>
                    <li style={li}>
                        <h2 style={texto}>Promoções</h2>
                    </li>
                    <li style={{paddingInline: "1.5rem"}}>
                        <h2 style={texto} onClick={handlePerfil}>Conta</h2>
                    </li>
                </ul>
                <div style={divPesquisa}>
                    <input type="text" alt="SearchBar" style={pesquisa} />
                </div>
            </div>
        </>
    )
}