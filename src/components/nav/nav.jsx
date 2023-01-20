import SearchBar from "../searchBar/SearchBar.jsx";
import styles from './nav.module.css'
import images from '../images/logo_tntn.png';
import SearchHeader from '../searchHeader/searchHeader.jsx';


import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faAddressBook, faUser, faLocationDot, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';


import "./nav.css";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const Nav = ({ onSearch }) => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };


    return (
        <header className="Header">
            <Link to="/">
                <img src={require("../images/Proyecto-nuevo.png")} className="Logo" alt="logo" />
            </Link>
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <Link to="about">
                        <a>About</a>
                    </Link>
                    <Link to="home">
                        <a>Home</a>
                    </Link>
                    <Link to="contact">
                        <a>Contact</a>
                    </Link>
                    <SearchHeader />

                    <button className="suscribete"> Suscribete </button>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <FontAwesomeIcon className="icon" icon={faBars} />
            </button>
        </header>


        /*   <header className="Header">
              <img className="Logo" src={images}></img>
              <nav className="Nav">
              <Link to="about">
                   <a className={styles.a}>About</a>
              </Link>
              <Link to="home">
                  <a className={styles.a}>Home</a>
              </Link>
              <Link to="contact">
                  <a className={styles.a}>Contact</a>
              </Link>
             
              <button> Logout</button>
              </nav>
          </header>
           */
    )
}

export default Nav;