import Favoritos from "pages/Favoritos/Favoritos";
import Player from "pages/Player/Player";
import Inicio from "pages/Inicio/Inicio.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada/NaoEncontrada";
import PaginaBase from "pages/PaginaBase/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;