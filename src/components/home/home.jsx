import './home.css';
import SearchBar from "../searchBar/SearchBar.jsx";
import Card from '../card/Card.jsx';
import Characters from '../Characters/Characters';
import SearchHeader from '../searchHeader/searchHeader.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const Home = ({ characters, onClose, onSearch }) => {
    return (
        <body class="bodyHome">
            <div class="contenedorHome">
                <header class="headerHome">
                    {/* <h2>Slider automatico con html y css</h2> */}
                    <div class="SliderHeader">
                        <ul class="ulSliderHeader">
                            <li class="liSliderHeader"><img class="imgSliderHeader" src={require("../images/contenidoNoticias.jpg")} /></li>
                            <li class="liSliderHeader"><img class="imgSliderHeader" src={require("../images/contenidoNoticias.jpg")} /></li>
                            <li class="liSliderHeader"><img class="imgSliderHeader" src={require("../images/contenidoNoticias.jpg")} /></li>
                            <li class="liSliderHeader"><img class="imgSliderHeader" src={require("../images/contenidoNoticias.jpg")} /></li>

                        </ul>
                    </div>
                    {/* <SearchHeader /> */}
                </header>
                <main class="contenidoHome">
                    <ul class="ulContenidoHome1">
                        <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/"> Serie</a></li>
                        <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/"> Rick and Morty</a></li>
                        <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/"> Noticias</a></li>
                    </ul>

                    <h2 class="titleContenidoh2">'RICK Y MORTY': ¿ESTÁ CONFIRMADA LA TEMPORADA 7?</h2>
                    <h3>¿Seguiremos las aventuras de Rick y Morty por los portales interdimensionales en una séptima temporada?</h3>
                    <div class="contenidoVideo">
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=PxzXkrFI5p4'
                            className='react-player'
                            playing
                            width='100%'
                            height='450px'
                            padding-left="25px"
                        />
                    </div>
                    <h3>SPOILERS DE LA TEMPORADA 6 DE 'RICK Y MORTY'</h3>
                    <p>La temporada 6 de 'Rick y Morty' comezó dando carpetazo (esperemos que
                        provisional) al final de la temporada 5 de 'Rick y Morty', que nos dejó con
                        algunas revelaciones bastante squanch, incluido el objetivo final del Morty
                        Malvado, así como la verdad detrás de la muerte de Diane.
                    </p>
                    <div class="columasContenido">
                        <div class="ColumContenidoIzquierda">
                            <p class="ColumContenidoIzquierdaP">
                                El primer episodio de la temporada 6 de 'Rick y Morty' nos reveló que Weird
                                Rick (El Rick "malo"), el verdadero asesino de la esposa del Rick que
                                conocemos ("nuestro" Rick), es en realidad el Rick primigenio. El
                                "Rick Principal". Nuestro Rick tomó su lugar después de la muerte de su
                                propia familia a manos del Rick Principal.
                            </p>
                        </div>
                        <div class="ColumContenidoDerecha">
                            <img class="imgColumContDerecha"
                                src={require("../images/contenidoNoticias.jpg")}
                                alt="logo" />
                        </div>
                    </div>
                    <p>Sí. En 2018 se encargaron oficialmente una cantidad de episodios enorme,
                        70, y todavía quedan muchos para llegar a esa cifra. Además, el propio Rick
                        Sánchez se encarga de dejarle claro a Morty que sus pesquisas seguirán en una
                        séptima temporada en la que seguirán viviendo aventuras y trabajando en equipo.
                        O, al menos, en lo que Rick entiende por "equipo".
                    </p>
                    <h3>¿Cuándo se estrena la temporada 7 de 'Rick y Morty'?</h3>
                    <p>Dan Harmon afirmó en el Festival de Adult Swim de 2020 que la séptima temporada de
                        la serie ya se encontraba en producción, y esto coincidió con el lanzamiento de la quinta.
                        Por lo que, si seguimos el ritmo, la séptima debería llegar sobre la segunda mitad
                        del 2023.
                    </p>
                    <img class="imgContenido2"
                        src={require("../images/rick_and_morty.jpg")}
                        alt="logo" />
                    <h3>¿De qué tratará la temporada 7 de 'Rick y Morty'?</h3>
                    <p>Como hemos visto antes, la trama principal seguirá la búsqueda de nuestro Rick
                        para vengarse del Rick Principal, pero todavía quedan huecos por llenar. Por
                        ejemplo, a qué realidad paralela viajó el Morty Malvado al final de la temporada
                        5, y qué implicaciones tendrá eso para nuestros protagonistas. ¿Volveremos a
                        verle?
                    </p>
                    {
                        characters.map(({ id, name, species, gender, image }) => {
                            return <Card
                                key={id}
                                name={name}
                                species={species}
                                gender={gender}
                                image={image}
                                id={id}
                                onClose={() => onClose(id)}
                            />
                        })
                    }
                </main>
                <aside class="sidebarHome">
                    <div class="sidebarContenedor">
                        <h4>Agrega personajes por Id :</h4>
                        <SearchBar onSearch={onSearch} />
                        <ul class="ulSidebar">
                            <h4 class="uH4Sidebar">Temporadas</h4>
                            <li class="liSidebar"> <FontAwesomeIcon icon={faCaretRight} /> Temporada 1</li>
                            <li class="liSidebar"> <FontAwesomeIcon icon={faCaretRight} /> Temporada 2</li>
                            <li class="liSidebar"> <FontAwesomeIcon icon={faCaretRight} /> Temporada 3</li>
                            <li class="liSidebar"> <FontAwesomeIcon icon={faCaretRight} /> Temporada 4</li>
                            <li class="liSidebar"> <FontAwesomeIcon icon={faCaretRight} /> Temporada 5</li>
                            <li class="liSidebar"> <FontAwesomeIcon icon={faCaretRight} /> Temporada 5</li>
                        </ul>
                        <Link to='character' >
                            <button class="btnViewCharacter">View Characters</button>
                        </Link>

                    </div>
                </aside>
                <div class="widget-1Home">
                    <h3>WIDGET 1</h3>
                </div>
                <div class="widget-2Home">
                    <h3>WIDGET 2</h3>
                </div>
                <footer class="footerHome">
                    <h3>FOOTER</h3>
                </footer>
            </div>

        </body>

    )
}
export default Home;