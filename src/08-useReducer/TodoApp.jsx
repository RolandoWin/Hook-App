import { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
    // {
    //     id: new Date().getTime() * 5,
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del tiempo',
    //     done: false,
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch  ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
       //console.log(todos);
       localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = ( todo ) => {

        console.log( {todo} );

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        //console.log(id);
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        //console.log({id});
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return (
        <>
            <h1> Todo App 10, <small>pendientes: 2</small></h1>
            <hr />
            <div className="row">       
                <div className="col-7">
                    {/* Crear functional component TodoList */}
                    <TodoList 
                        todos = { todos } 
                        onDeleteTodo = { handleDeleteTodo }
                        onToggleTodo = { handleToggleTodo }
                    />
                    {/* Fin TodoList */}
                </div>
                <div className="col-5">                    
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* Crear functional component TodoAdd onNewTodo( todo ) */}                    
                    {/* {id: new Date()..., description: '', done: false} */}
                    <TodoAdd onNewTodo={ todo => handleNewTodo(todo) } />
                    {/* Fin TodoAdd */}
                </div>
            </div>
        </>
    )
}