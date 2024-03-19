import { useState } from "react";
//export const AddCategory = () => {
//export const AddCategory = ({setCategory}) => {
export const AddCategory = ({onNewCategory}) => {  //Cambiamos por el onNewCategory declarado para pasar el value desde el padre. 
    const [inputValue, setInputValue] = useState(' ');
    
    //const onInputChange =(event) => {
    const onInputChange =({target}) => {   // Desestructuramos el event para evitar pasar todo 
        //console.log(event.target.value)
        //setInputValue(event.target.value)
        //console.log(target.value)
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        // Como evitar los espacios en blacos o accionar apartir de un limite de caracteres
        // Validate
        const cleanInputValue = inputValue.trim()
        if (cleanInputValue.length <= 1 ) return ; // con este return cortamos para evitar que siga con los otrso steps del metodo
        console.log(inputValue)
        //setCategory([inputValue])  // Pisa el valor del array
        //setCategory(category => [inputValue, ...category])  // MAntiene el state anterior
        // Comentamos la linea de arriba para remplazara por el onNewCategory
        onNewCategory(cleanInputValue)

        // Hago el clear del form input para que no quede el registro
        setInputValue('')
    }
    return(
       // Primera prueba para ver lugar del componente <h1>AddCategory</h1>
    // <form onSubmit={(event) => onSubmit(event)}>
    // Simplificamos la funcion submit
    <form onSubmit={ onSubmit }>    
        <input
            type="text"
            placeholder="Buscar Gift"
            //onChange={(event) => onInputChange(event)}
            onChange={onInputChange}  // Como el event esta implisito en el onChange  no es necesario declaralo
            value={inputValue}
        />
    </form>
    
       )
}