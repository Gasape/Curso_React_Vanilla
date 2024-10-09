import { useState } from 'react'


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const inputValueTrimed = inputValue.trim()
        if (inputValueTrimed.length <= 1) return;

        // setCategories( (categories) => [ inputValue, ...categories] );
        onNewCategory( inputValueTrimed );
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ (e) => setInputValue(e.target.value) }
            />
           

        </form>
    )
}
