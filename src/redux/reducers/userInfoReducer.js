export const userNameReducer = (state = {}, action) => {
    switch (action.type) {
        case "GETUSERNAME":
            return { ...action.payload };
        default:
            return state;
    }
}
export const userPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case "GETUSERPASSWORD":
            return { ...action.payload };
        default:
            return state;
    }
}
export const userInfoReducer = (state = [], action) => {
    switch (action.type) {
        case "GETIFO":
            return [...action.payload];
        default:
            return state;
    }
}