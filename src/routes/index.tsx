import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PerfilScreen, CarrinhoScreen, LoginScreen, RecScreen, RegisterScreen } from "../screens/pages"

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/carrinho" element={<CarrinhoScreen />}/>
                    <Route path="/perfil" element={<PerfilScreen />}/>
                    <Route path="/register" element={<RegisterScreen />}/>
                    <Route path="/rec" element={<RecScreen />}/>
                    <Route path="/login" element={<LoginScreen />}/>
                    <Route path="/" element={<LoginScreen />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes