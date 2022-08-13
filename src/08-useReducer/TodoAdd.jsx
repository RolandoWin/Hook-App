import { useForm } from '../hooks/useForm'

export const TodoAdd = ( { onNewTodo } ) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        //console.log('Descripción 1: ' + description.length);
        if ( description.length <= 1 ) return;
        //console.log('Descripción 2: ' + description.length);
        const newTodo = {
            id: new Date().getTime(),            
            done: false,
            description: description,
        }
        //console.log( 'Nuevo Todo: ' + JSON.stringify( newTodo ) );
        onNewTodo( newTodo );
        onResetForm();        
    }

    return (
            <form onSubmit = { (event) => onFormSubmit(event) } >
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="¿Que hay que hacer?" 
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />
                <button type="submit" className="btn btn-outline-primary mt-2" >
                    Agregar
                </button>
            </form>
    )
}