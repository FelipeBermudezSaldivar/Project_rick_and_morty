import { Link } from "react-router-dom";

//necesito la informacion de los personajes  del estado global
import { useDispatch, useSelector } from "react-redux"; //hook de react-redux
import { useEffect } from "react";
import { getCharacter } from "../../redux/actions"; //de la action

import CardCharacter from "../CardCharacter/CardCharacter";
import Card from "../card/Card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretRight, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import Character from './Character.css'


const Characters = () => {

    const characters = useSelector((state) => state.characters) // del estado global quiero a charachters
    const dispatch = useDispatch();

    useEffect(() => {//para montar los characterts
        dispatch(getCharacter());
    }, []);

    return (

        <body class="bodyDetail">
            <div class="contenedorDetail">
                <header class="headerDetail">
                    <img class="imgSliderHeader" src={require("../images/4.jpg")} />
                    <span class="spanHeaderDetail">Anuncia tu empresa aqui </span>
                </header>
                <main class="contenidoDetail">
                    <div class="contCentradoDetail">
                        <ul class="ulContenidoHome1">
                            <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/"> Home</a></li>
                            <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/character"> Characters</a></li>
                            <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/"> All</a></li>
                        </ul>
                    </div>
                    <div class="contDetailIzquierda">
                        <div class="divCharacter">
                            <h1>Characters</h1>
                            {
                                characters.map((character) =>
                                    <CardCharacter
                                        key={character?.id}
                                        id={character?.id}
                                        name={character?.name}
                                        image={character?.image}
                                        gender={character?.gender}
                                    />

                                )
                            }


                        </div>
                    </div>
                    <div class="contDetailDerecha">

                    </div>

                </main>
                <aside class="sidebarDetail">
                    <div class="contDetailDerecha">
                        <h3>Filtrar Character</h3>
                        <ul class="ulContenidoDetail2">
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> name</span></li>
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> status</span></li>
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> especies</span></li>
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> gender</span></li>
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> origin name</span></li>
                        </ul>
                        <Link to="/">
                            <button class="btnDetail"><FontAwesomeIcon class="iconli1Detail" icon={faArrowRight} />Ir a Cards</button>
                        </Link>
                    </div>
                </aside>
                <div class="widget-1Detail">Widget 1</div>
                <div class="widget-2Detail">Widget 2</div>
                <div class="footerDetail">ultima seccion</div>
            </div>
        </body>
    )
}

export default Characters;

/* import React from "react";
import { connect } from "react-redux";
import { getCharacter } from "../../redux/actions";
import CardCharacter from "../CardCharacter/CardCharacter";

class Characters extends React.Component {
    constructor(props) { //{characters [], getCharacter}
        super(props)
    }
    componentDidMount() {
        this.props.getCharacter()
    }

    render() {
        return (
            <div>
                <h1>Character con class component</h1>
                {
                    this.props.characters?.map((character2) => {
                        return (
                            <CardCharacter
                                key={character2?.id}
                                id={character2?.id}
                                name={character2?.name}
                                image={character2?.image}
                                gender={character2?.gender}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCharacters: () => dispatch(getCharacter())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters); */