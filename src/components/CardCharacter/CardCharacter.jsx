import { Link } from "react-router-dom";

const CardCharacter = ({ id, name, image, gender }) => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>{name} </h3>
            <h3>{gender} </h3>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} />
            </Link>


        </div>
    )
}
export default CardCharacter;