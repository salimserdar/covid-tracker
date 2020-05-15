export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_COUNTIES':
            return action.payload
        default:
            return state;
    }
}