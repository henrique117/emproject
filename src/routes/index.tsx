import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PerfilScreen } from "../screens/pages"

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PerfilScreen />}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes