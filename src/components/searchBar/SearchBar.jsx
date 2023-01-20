
import styles from './search.module.css';
import { useState } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faAddressBook, faUser, faLocationDot, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';



import { searchengin } from "react-icons/fa";


function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.search}>
         <input className={styles.inputSearch} type='search' value={character} onChange={handleChange} placeholder="Ingresa el id de la card" />

         <button className={styles.buttonAdd} onClick={() => onSearch(character)}>Agregar <FontAwesomeIcon icon={faAddressBook} /></button>
      </div>
      /* <div class="demo">
         <form class="form-search">
            <div class="input-group">
               <input class="form-control form-text" maxlength="128" placeholder="Buscar" size="15" type="search" value={character} onChange={handleChange} />
               <span class="input-group-btn"><button class="btnSearch" onClick={() => onSearch(character)}><FontAwesomeIcon icon={faSearch} />&nbsp;</button></span>

            </div>
         </form>

      </div> */


   );
}

export default SearchBar;
