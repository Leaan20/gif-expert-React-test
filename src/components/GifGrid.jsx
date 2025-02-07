// 1 importaciones de React
// import { useState,useEffect } from 'react';
// 2 importaciones de terceros

// 3 importaciones propias de codigo
import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';
// 4 funciones que no son componentes ni hooks
// import { getGifs } from '../helpers/getGif.js';


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );




  return (
    <>
        <h3>{category}</h3>
        {/* debe usarse className para clases de css , ya que Class esta reservado para crear clases Js */}
        <div className='card-grid'>
          {/* Condicional cargando  o hacer un componente que se encargue de eso*/}
          {
            isLoading && (<h2>...Loading</h2>)
          }
          {
            // usar parentesis () en lugar de llaves {} , permite un return implicito
            images.map( ( image ) => (
                  <GifItem
                  key={image.id}
                  // podemos utilizar el operador spread para poder enviar todas las propiedades, como props, para cuando tenemos muchas propiedades.
                    {...image}
                   />
             ))
            // images.map(({id, title, url}) =>(
            //   <ImgCard id={id} url={url} title={title} />
            // ))
            
          }
        </div>

    </>
  )
}
