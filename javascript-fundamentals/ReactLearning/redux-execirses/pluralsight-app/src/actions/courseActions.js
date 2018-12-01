import * as types from "../constants/action-types";

export const createCourse = (course) => {
    return {
        type: types.CREATE_COURSE,
        course
    }
}