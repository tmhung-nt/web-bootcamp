import { CREATE_COURSE } from "../constants/action-types";

export const createCourse = (course) => {
    return {
        type: CREATE_COURSE,
        course
    }
}