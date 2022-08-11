import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';


export const Layout = () => {
    
    const { counter, increment } = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
    const { data, isLoading, hasError } = useFetch( url );   
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1> Breaking Bad Quotes </h1>
            <hr />
            {                
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
