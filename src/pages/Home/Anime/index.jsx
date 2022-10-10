import { Container, AnimeList, Anime } from "./style";
import {useState, useEffect} from "react"
import Filtro from "../Filtro";


function Home(){
    const [filtroValue, setFiltroValue] = useState('')
    const [animesFiltrados,setAnimesFiltrados] = useState([])
    const [animes, setAnimes] = useState([])


    useEffect(() => {
        //objetivo de consumir a api...

        fetch(`https://api.jikan.moe/v4/anime`)
        .then(response => response.json())
        .then(data => {
            setAnimes(data.data)
            setAnimesFiltrados(data.data)
        })

    }, [])   




    function handleFiltroValue(value) {
        setFiltroValue(value)
        const animeDigitado = animes.filter(anime => { return anime.title.toLowerCase().includes(value.toLowerCase())})
        setAnimesFiltrados(animeDigitado)
    }

    return(
    <Container>
        <h1>Lista de Animes</h1>


        <Filtro onChangeFiltroValue={handleFiltroValue} />

        <AnimeList>

            {animesFiltrados.map(anime =>{
                return(
                    <Anime key={anime.mal_id}>
                      <img src={anime.images.jpg.image_url} alt ={anime.status}></img>
                        <span>{anime.title}</span>
                        <span>Episódios: {anime.episodes}</span>
                    </Anime>
                )
            })}
        </AnimeList>
    </Container>
    )
}
export default Home;