import { useState, useEffect } from 'react';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Rolando',
        email: 'rolando@gmail.com',
    });

    const { username, email } = formState;
    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({ 
            ...formState,
            [ name ]:value
        })
    }

    useEffect(() => {
        console.log('El useEffect se called!');        
    }, []);

    useEffect(() => {
        console.log('Cambio el formulario!');        
    }, [formState]);

    useEffect(() => {
        console.log('Cambio el email!');        
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
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
        </>
    )
}
