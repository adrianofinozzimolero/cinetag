import Cabecalho from "componentes/Cabecalho/Cabecalho";
import Container from "componentes/Container/Conteiner";
import Rodape from "componentes/Rodape/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;