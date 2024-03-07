import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const {favorito,setFavorito} = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item=>item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            console.log('entrou 1 ')
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        } else {
            console.log('entrou 2 ');
            
        }


        /* Método dado no vídeo mas não funciona (É explicado mas entender após estudar mais o React)
        novaLista.splice(novaLista.indexOf(novoFavorito), 1); */

        /* Solução 1
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);  */

        /* Solução 2 */
        novaLista.splice(
            novaLista.findIndex (
                item => item.id === novaLista.find(item => item.id === novoFavorito.id).id
            ),
            1
        )

        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}