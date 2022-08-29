import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    //Para limpiar cada una de las llamadas de las funciones
    beforeEach( () => {
        jest.clearAllMocks();
    });
    
    test('1.- Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render( <MultipleCustomHooks />);
        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect( nextButton.disabled ).toBeTruthy();
        //screen.debug();

    });
    
    test('2.- Debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Rolando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
       
        render( <MultipleCustomHooks />);
        //screen.debug();
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Rolando') ).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();

    });

    test('3.- Debe de llamar la función de incrementar', () => {
       
        useFetch.mockReturnValue({
            data: [{ author: 'Rolando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
       
        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        fireEvent.click( nextButton );
        expect( mockIncrement ).toHaveBeenCalled();

    });    
    
});
