import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {
    // state de AddCategory
    const [inputValue, setInputValue] = useState('');

    const onInputChange =({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return ;

        //setCategories(cat => [inputValue , ...cat]);
        onNewCategory( inputValue.trim() );
        setInputValue('');

    }


  return (<>
        <form onSubmit={ onSubmit }>

            <input type="text"
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={ onInputChange } />

        </form>

    
    </>)
}
