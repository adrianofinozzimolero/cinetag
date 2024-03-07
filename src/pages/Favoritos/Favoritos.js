import styles from './Favoritos.module.css';
import Banner from "componentes/Banner/Banner";
import Card from 'componentes/Card/Card';
import Titulo from "componentes/Titulo/Titulo";
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos() {

    const {favorito} = useFavoritoContext();

    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

/*<Card id='1' titulo='Gato Bonifácio' capa='/imagens/Poster1.png' /> */


export default Favoritos;
