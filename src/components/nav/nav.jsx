import SearchBar from "../searchBar/SearchBar.jsx";
import styles from './nav.module.css'
import images from '../images/logo_tntn.png';
import {Link} from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return(
        <div className={styles.navPrincipal}>
            <img className={styles.img} src={images}></img>
            <Link to="about">
                 <a className={styles.a}>About</a>
            </Link>
            <Link to="home">
                <a className={styles.a}>Home</a>
            </Link>
            <Link to="contact">
                <a className={styles.a}>Contact</a>
            </Link>
            <SearchBar className={styles.search} onSearch={onSearch} />
        </div>
        
    )
}

export default Nav;