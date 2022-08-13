import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    }
]

export const TodoApp = () => {

    const [ todos, dispatch  ] = useReducer(todoReducer, initialState)

    const handleNewTodo = ( todo ) => {
        console.log({ todo });
    }

    return (
        <>
            <h1> Todo App 10, <small>pendientes: 2</small></h1>
            <hr />
            <div className="row">       
                <div className="col-7">
                    {/* Crear functional component TodoList */}
                    <TodoList todos={ todos } />
                    {/* Fin TodoList */}
                </div>
                <div className="col-5">                    
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* Crear functional component TodoAdd onNewTodo( todo ) */}                    
                    {/* {id: new Date()..., description: '', done: false} */}
                    <TodoAdd />
                    {/* Fin TodoAdd */}
                </div>
            </div>
        </>
    )
}