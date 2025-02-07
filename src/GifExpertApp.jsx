import { useState } from "react"
// utilizando el borrar 
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {


    // State de GifExpertApp
    const [categories, setCategories] = useState(['One Punch']);


    const onAddCategory = (newCategory) => {

      if( categories.includes(newCategory) ) return;
       setCategories([
        newCategory,
        ...categories
       ]);
    }
    // const onAddCategory = () => {
    //    return setCategories( cat => [...cat, newCategory]  );
    // }

  return (
    <>
    {/* {titulo} */}
    <h1>GifExpertApp</h1>

    {/* input */}
    <AddCategory
    // setCategories={ setCategories }
    // el prefijo on se utiliza para los eventos
    onNewCategory={ onAddCategory }
    />

    {/* listado de Gif */}

            {
              categories.map( category => (
                    <GifGrid 
                      key={category}
                      category={category} 
                     />
                ))
            }
        {/* Gif item */}

    </>
  )
}
