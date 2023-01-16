import {useState, useEffect} from 'react';
import { Routes, Route, useParams,Link } from 'react-router-dom';



const Detail = () =>{

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    /* traemos la info de acuerdo al id */
    useEffect (()=>{
       fetch(`https://rickandmortyapi.com/api/character/${detailId}`)//la info que tra el fetch
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);//lo guardo en char
            } else {
                window.alert('No hay personajes con ese ID');
            }
        })
        .catch((err)=>{
            window.alert('No hay personajes con ese ID');
        });
      return setCharacter({});
    },[detailId])

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>v
            <br></br>
            <Link to="/home">
            <button>regresar</button>
            </Link>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt=""/>
            <h2>Detail</h2>
        </div>
    )
}
export default Detail;