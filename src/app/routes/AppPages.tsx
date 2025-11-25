import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LOGIN_ROUTE } from "../../shared/routes/appRoutes"
import { InicioPage } from "../pages/InicioPage"

export const AppPages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={LOGIN_ROUTE} element={<InicioPage />} />
            </Routes>
        </BrowserRouter>
    )
}
