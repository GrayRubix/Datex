export const bourseDataReducer = (state = [], action) => {
    switch (action.type) {
        case "BOURSDATA":
            return [...action.payload];
        default:
            return state;
    }
}