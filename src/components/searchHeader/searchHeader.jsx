import './searchHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faAddressBook, faUser, faLocationDot, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const searchHeader = () => {
    return (
        <div class="contenedorSearchHeader">
            <form class="formSearchHeader">
                <div class="imputGroupSearchHeader">
                    <input class="inputSearchHeader" maxlength="128" placeholder="Buscar" size="15" type="search" />
                    <span class=""><button class="btnSearchHeader"><FontAwesomeIcon icon={faSearch} />&nbsp;</button></span>

                </div>
            </form>

        </div>
    )
}
export default searchHeader;