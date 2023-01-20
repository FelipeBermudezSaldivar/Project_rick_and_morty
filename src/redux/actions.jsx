import { GET_CHARACTERS, CHARACTER_DETAIL, CLEAN_DETAIL } from './action-types'
import axios from 'axios';


export const getCharacter = () => {
    return async function (dispatch) {
        let response = await axios("https://rickandmortyapi.com/api/character");

        return dispatch({
            type: GET_CHARACTERS,
            payload: response.data.results,
        })
    }
}
export const getCharacterDetail = (id) => {
    return function (dispatch) {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => dispatch({ type: CHARACTER_DETAIL, payload: data }))

    }
}
export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}
