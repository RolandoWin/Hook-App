import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas en el useCounter', () => {
   
    test('1.- Debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));

    });
    
    test('2.- Debe de generar el counter con el valor de 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        expect( counter ).toBe(100);

    });

    test('3.- Debe de incrementar el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;

        act( () => {
            increment(  );
            increment( 2 );
        });

        expect( result.current.counter ).toBe(103);

    });

    test('4.- Debe de decrementar el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement(  );
            decrement( 2 );
        });

        expect( result.current.counter ).toBe(97);

    });

    test('5.- Debe de decrementar el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement(  );
            decrement( 2 );
        });

        expect( result.current.counter ).toBe(97);

    });

    test('6.- Debe de realizar el reset', () => {
       
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe(100);
        
    });

});