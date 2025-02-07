// Custom Hook

import { useState, useEffect } from "react";

import { getGifs } from '../helpers/getGif.js';

export const useFetchGifs = ( category ) => {

        const [images, setImages] = useState([]);
        const [isLoading, setIsLoading] = useState( true );
    
        const getImages = async () => {
            const newImages = await getGifs(category);
            setImages( newImages );
            setIsLoading(false);
        }
    
        // Hook UseEffect 2 argumentos , 1 funcion efecto, lista de dependencias, condiciones por la cuales se quiere volver a ejecutar la funcion de efecto
        useEffect( () => {
          getImages();
    
          //cleanup o funcion de retorno y limpieza
    
        }, [] );

    return {
        images,
        isLoading
    }
}