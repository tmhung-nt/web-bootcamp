import * as types from "../constants/action-types";
import axios from 'axios';

let authors;
export const loadAuthors = () => {
    return dispatch => {
        return axios.get(types.FETCH_COURSES_URL) // get courses first then parse author list from there
                    .then(response => {
                        authors = response.data.map((course, index ) => ({firstName: course.authorId, id: index}));
                        dispatch(loadAuthorsSuccess(authors));
                    })
                    .catch(error => console.log(error));
        // return AuthorApi.getAllAuthors()
        //             .then(response => dispatch(loadAuthorsSuccess(response)))
        //             .catch(error => console.log(error));
    }
}

const loadAuthorsSuccess = authors => {
    return {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors: authors
    }
}
