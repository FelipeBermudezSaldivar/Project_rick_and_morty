import styles from './card.module.css'
import { Link } from 'react-router-dom';
/* export default function Card({ name, gender, onClose, species, image }) {
   return (
      <div className={styles.divContent}>
         <button onClick={onClose}>X</button>
         <h2 className={styles.divName}>Name : {name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
} */
function Card({ name, gender, onClose, species, image, id }) {
   //props --> {name: '', species: '', gender: '', image: '', onClose: fn}
   return (

      <div className={styles.conteiner}>
         <div className={styles.card}>

            <img className={styles.img} src={image} alt={name} />
            <button class={styles.buttomClose} onClick={onClose}>x</button>
            <Link to={`/detail/${id}`}>
               <h4 className={styles.cardName}>{name}</h4>
            </Link>
            <p className={styles.p}> Especie :{species} -  Gender : {gender} seguimos maquetando</p>
            <button className={styles.buttomOff}> <a className={styles.a2}>Ver Card</a></button>
         </div>
      </div>


   );
}


export default Card;
