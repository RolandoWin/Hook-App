import { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {        
        //Se monta el componente
        //console.log('Message Mounted');
        //Escuchamos los movimientos del mouse
        const onMouseMove = ({x, y}) => {
            //const coords = {x, y};
            //console.log(coords);
            setCoords({x, y});
        }

        window.addEventListener( 'mousemove', onMouseMove );

        return () => {

            //Se desmonta el componente
            //console.log('Message Unmounted');
            //Removemos el addEventListener
            window.removeEventListener( 'mousemove', onMouseMove );

        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify( coords) }
        </>
    )
}