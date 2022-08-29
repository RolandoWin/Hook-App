import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {

    const todo ={
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    //Devuelve a su estado inicial las funciones llamadas 
    beforeEach( () => jest.clearAllMocks() );
    
    test('1.- Debe de mostrar el Todo pendiente de completar', () => {
            
        render( <TodoItem 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodoMock} 
                    onToggleTodo={onToggleTodoMock} 
                /> 
        );

        const liElement = screen.getByRole('listitem');
        //console.log( liElement.innerHTML );
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        //console.log(spanElement.className);
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
        //screen.debug();

    });

    test('2.- Debe de mostrar el Todo completado', () => {

        todo.done = true;
            
        render( <TodoItem 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodoMock} 
                    onToggleTodo={onToggleTodoMock} 
                /> 
        );

        const spanElement = screen.getByLabelText('span');        
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('3.- Span debe de llamar al onToogleTodo cuando se hace click', () => {
        
        render( <TodoItem 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodoMock} 
                    onToggleTodo={onToggleTodoMock} 
                /> 
        );

        const spanElement = screen.getByLabelText('span'); 
        //Simular el click en el span 
        fireEvent.click(spanElement);
        //estamos esperamdo que sea llamado el onToggleTodoMock con el el id=1
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('4.- El button debe de llamar al evento onDeleteTodo', () => {
        
        render( <TodoItem 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodoMock} 
                    onToggleTodo={onToggleTodoMock} 
                /> 
        );

        const deleteButton = screen.getByRole('button'); 
        fireEvent.click(deleteButton);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });
    
    
});
