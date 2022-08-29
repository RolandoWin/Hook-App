import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-UseContext/MainApp';

describe('Pruebas en <MainApp />', () => {
   
    test('1.- Debe de mostrar el HomePage', () => {
        
        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        screen.debug();
        expect( screen.getByText('Home Page') ).toBeTruthy();

    });

    test('2.- Debe de mostrar el LoginPage', () => {
        
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        
        expect( screen.getByText('Login Page') ).toBeTruthy();
        screen.debug();

    });
    
});
