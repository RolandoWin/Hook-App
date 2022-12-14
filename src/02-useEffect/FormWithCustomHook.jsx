import { useEffect } from 'react';
import { useForm } from '../hooks';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const { username, email, password } = formState;
    
    useEffect(() => {
        //console.log('El useEffect se called!');        
    }, []);

    useEffect(() => {
        //console.log('Cambio el formulario!');        
    }, [formState]);

    useEffect(() => {
        //console.log('Cambio el email!');        
    }, [email]);

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />
            <input 
                type="text" 
                className="form-control" 
                placeholder="User Name" 
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email" 
                className="form-control mt-2" 
                placeholder="Email" 
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input 
                type="password" 
                className="form-control mt-2" 
                placeholder="Contraseña" 
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2"> Borrar </button>
           
        </>
    )
}
