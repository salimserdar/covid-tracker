export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            return action.payload
        default:
            return state;
    }
}