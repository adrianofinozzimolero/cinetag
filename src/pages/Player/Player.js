import Banner from 'componentes/Banner/Banner';
import styles from './Player.module.css';
import Titulo from 'componentes/Titulo/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const parametros = useParams();

/*    const [videos, setVideos] = useState([]); 
    
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })
*/

    const [video, setVideo] = useState();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/adrianofinozzimolero/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, []);

    console.log(video);

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;