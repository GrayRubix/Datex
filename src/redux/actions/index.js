
export const GetUserName = (data) => {
    return async (dispatch) => {
        await dispatch({ type: "GETUSERNAME", payload: data })
    };
};
export const GetPassword = (data) => {
    return async (dispatch) => {
        await dispatch({ type: "GETUSERPASSWORD", payload: data })
    };
};
export const GetInfo = (data) => {
    return async (dispatch) => {
        await dispatch({ type: "GETUINFO", payload: data })
    };
};
export const getCourses = () => {
    return async (dispatch) => {
        const courses = await fetchCourses();
        await dispatch({ type: "INIT", payload: courses });
    };
};