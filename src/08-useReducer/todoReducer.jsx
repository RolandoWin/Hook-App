
export const todoReducer = ( initialState = [], action ) => {

    //console.log('Todo reducer: ' + JSON.stringify(action.payload) );

    switch ( action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload ]

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );
    
        default:
            return initialState;
    }

}