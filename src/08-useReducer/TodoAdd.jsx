

export const TodoAdd = () => {
    return (
        <form>
            <input 
                type="text" 
                className="form-control"
                placeholder="¿Que hay que hacer?" 
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
                Agregar
            </button>
        </form>
    )
}
