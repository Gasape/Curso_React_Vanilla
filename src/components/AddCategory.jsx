import PropTypes from 'prop-types';
import { useState } from 'react'


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const inputValueTrimed = inputValue.trim()
        if (inputValueTrimed.length <= 1) return;

        // setCategories( (categories) => [ inputValue, ...categories] );
        setInputValue('');
        onNewCategory( inputValueTrimed );
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ (e) => setInputValue(e.target.value) }
            />
           

        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}