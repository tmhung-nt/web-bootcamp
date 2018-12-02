import * as types from "../constants/action-types";
import axios from 'axios';

export const loadAuthors = () => {
    return dispatch => {
        return axios.get(types.FETCH_AUTHORS_URL)
                    .then(response => dispatch(loadAuthorsSuccess(response.data)))
                    .catch(error => console.log(error));
    }
}

const loadAuthorsSuccess = authors => {
    return {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors: authors
    }
}
