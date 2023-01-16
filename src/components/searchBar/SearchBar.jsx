/* export default function SearchBar({ onSearch }) {
   return (
      <div>
        <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
} */
import styles from './search.module.css';
import { useState } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faBell,faMagnifyingGlass,faAddressBook,faUser,faLocationDot} from '@fortawesome/free-solid-svg-icons';



import { searchengin } from "react-icons/fa";


function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      
      <div className={styles.search}>
         
         <input className={styles.inputSearch} type='search' value={character} onChange={handleChange} placeholder="Ingresa el id de la card" />
      {/*    <FontAwesomeIcon className ={styles.iconUser} icon={faUser}/> */}
         <button className={styles.buttonAdd} onClick={() => onSearch(character)}>Agregar <FontAwesomeIcon icon={faAddressBook} /></button>
        
         
      </div>
   );
}

export default SearchBar;
