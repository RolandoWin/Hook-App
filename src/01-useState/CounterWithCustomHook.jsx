import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();
    
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr></hr>
            <button className="btn btn-primary" onClick={ () => increment(2) } >+1</button>
            <button className="btn btn-secondary" onClick={ reset } >Reset</button>
            <button className="btn btn-success" onClick={ () => decrement(2) } >-1</button>
        </>
    )
}
