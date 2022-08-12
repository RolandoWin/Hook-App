
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type) {
        case 'ABC':
            throw new Error('La action.type no esta implementada');
    
        default:
            return initialState;
    }
}