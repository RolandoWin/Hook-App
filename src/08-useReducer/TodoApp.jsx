import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
    
    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();    

    return (
        <>
            <h1> Todo App { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
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