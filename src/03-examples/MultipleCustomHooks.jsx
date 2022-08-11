import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

    const { data, isLoading, hasError } = useFetch( url );
    //console.log(url);    
    
    //console.log({ data, isLoading, hasError });

    //Si la data tiene un valor toma el valor en la posicion cero
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1> Breaking Bad Quotes </h1>
            <hr />
            {
                // isLoading 
                //     ? ( 
                //         <div className="alert alert-info text-center">
                //             Loading...
                //         </div>
                //     )
                //     :(
                //         <blockquote className="blockquote text-end">
                //             <p className="mb-1"> { quote } </p>
                //             <footer className="blockquote-footer"> { author } </footer>
                //         </blockquote>
                //      )
                isLoading
                ? <LoadingQuote />
                : <Quote author={ author } quote={ quote } />
            }
            
            <button 
                className='btn btn-primary' 
                disabled={ isLoading }
                onClick={ () => increment(1) } 
            >
                Next quote
            </button>          
        </>
    )
}
