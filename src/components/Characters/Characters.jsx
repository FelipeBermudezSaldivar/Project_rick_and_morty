import { Link } from "react-router-dom";

//necesito la informacion de los personajes  del estado global
import { useDispatch, useSelector } from "react-redux"; //hook de react-redux
import { useEffect } from "react";
import { getCharacter } from "../../redux/actions"; //de la action

import CardCharacter from "../CardCharacter/CardCharacter";
import Card from "../card/Card";


const Characters = () => {

    const characters = useSelector((state) => state.characters) // del estado global quiero a charachters
    const dispatch = useDispatch();

    useEffect(() => {//para montar los characterts
        dispatch(getCharacter());
    }, []);

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Rederizar Characters</h1>
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
            
            <Link to='/' >
                <button>Regresar a Home</button>
            </Link>
        </div>

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