import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange =(e)=>{

        console.log(e.target.value)
        setinputValue(e.target.value)

    }

    const handleSubmit =(e)=>{
        //Evita que se recargue la pag al dar enter al form
        e.preventDefault(); 
        console.log('Enviado');

        //TRIM borra espacios antes y despues 
        if(inputValue.trim().length>2){
            //utilizo funcion de flecha xq no tengo acceso directo al arreglo
            setCategories(cats=>[inputValue,...cats]);
            //reseteo el form al dar enter
            setinputValue('');
        }
        
        
    }


  return (
    <form onSubmit={handleSubmit}>
        <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}

            />
    </form>
  )
}

//Hago obligatorio que me manden la funcion setCategories.

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}