import { TodoItem } from './TodoItem';

export const TodoList = (  {todos = [], onDeleteTodo}  ) => {

    //console.log('Todos lista: ' + todos );

    return (
        <>
            <ul className="list-group">
                {
                    todos.map( todo => (                                
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onDeleteTodo={id => onDeleteTodo(id)} 
                        />
                    ))
                }                                                
            </ul>
        </>
    )

}