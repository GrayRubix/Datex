import { fetchbourse } from "../../api/bourse";

export const getBourse = () => {
    return async (dispatch) => {
        const bourse = await fetchbourse();
        await dispatch({ type: "BOURSDATA", payload: bourse });
    };
};

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
