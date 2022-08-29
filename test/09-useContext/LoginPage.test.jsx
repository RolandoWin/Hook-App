import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-UseContext/context/UserContext';
import { LoginPage } from '../../src/09-UseContext/LoginPage';

describe('Pruebas en <LoginPage />', () => {
  
    test('1.- Debe de mostrar el componente si el usuario', () => {
        
        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage />
            </UserContext.Provider>
        );
        //screen.debug();
        const preTag = screen.getByLabelText( 'pre' );
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('2.- Debe de llamar al setUser cuando se hace click en el botón', () => {

        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"});

    });    
    
});
