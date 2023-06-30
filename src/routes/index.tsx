import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PerfilScreen, HomeScreen } from "../screens/pages"

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/home" element={<HomeScreen />}/>
                    <Route path="/perfil" element={<PerfilScreen />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes