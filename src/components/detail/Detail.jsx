
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretRight, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { getCharacterDetail, cleanDetail } from '../../redux/actions';
import { useEffect } from 'react';

import "./Detail.css";


const Detail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const detailCharacter = useSelector((state) => state.characterDetail)

    useEffect(() => {
        dispatch(getCharacterDetail(id))

        return () => dispatch(cleanDetail());
    }, [])


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
                            <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/"> Card</a></li>
                            <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/"> {detailCharacter?.name}</a></li>
                            <li class="liContenidoHome1"><FontAwesomeIcon class="iconli1" icon={faChevronRight} /><a class="lia1" href="/"> {detailCharacter?.id}</a></li>
                        </ul>
                    </div>
                    <div class="contDetailIzquierda">
                        <img class="imgDetail" src={detailCharacter?.image} alt="" />
                    </div>
                    <div class="contDetailDerecha">
                        <h3>Caracteristicas</h3>
                        <ul class="ulContenidoDetail2">
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> {detailCharacter?.name}</span></li>
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> {detailCharacter?.status}</span></li>
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> {detailCharacter?.species}</span></li>
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> {detailCharacter?.gender}</span></li>
                            <li class="liContenidoDetail2"><FontAwesomeIcon class="iconli1Detail" icon={faChevronRight} /><span class="spanLiDetail"> {detailCharacter?.origin?.name}</span></li>
                        </ul>
                        <Link to="/character">
                            <button class="btnDetail"><FontAwesomeIcon class="iconli1Detail" icon={faArrowRight} />Ir a Cards</button>
                        </Link>
                    </div>

                </main>
                <aside class="sidebarDetail"> Sidebar Detail</aside>
                <div class="widget-1Detail">Widget 1</div>
                <div class="widget-2Detail">Widget 2</div>
                <div class="footerDetail">ultima seccion</div>
            </div>
        </body>
    )
}
export default Detail;

