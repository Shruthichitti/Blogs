export default (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_POST' :
            return [...state,action.payload];
        default:
            return state;
    }
};