import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-UseContext/context/UserContext';
import { HomePage } from '../../src/09-UseContext/HomePage';


describe('Pruebas en <HomePage />', () => {

    const user = {
        "id": 1,
        "name": 'Rolando'
    }
    
    test('1.- Debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={ { user: null} }> 
                <HomePage /> 
            </UserContext.Provider>
        );
        //screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('2.- Debe de mostrar el componente con el usuario', () => {
        
        render(
            <UserContext.Provider value={ { user } }> 
                <HomePage /> 
            </UserContext.Provider>
        );
       
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
         //screen.debug();

    });
    
});