import { useState } from "react"
//import { AddCategory } from './components/AddCategory.jsx';
//import { GifGrid } from './components/GifGrid.jsx';
// Hacemos una importacion general que utiliza el index.js del folder mencionado
import { AddCategory, GifGrid } from './components';
export const  GiftExpertApp = () => {
  const [category, setCategory] = useState([ 'Dragon Ball']);
  //const onAddCategory = () => {
  const onAddCategory = (newCategory) => {  
  // Agregar una categoria
    //setCategory([...category, 'Valorant']);
    // tambien se puede hacer 
    /*
      setCategory(['Valorant', ...category]);  // Poner el nuevo valor primero
      setCategory(cat => [...cat, 'Valorant']);
    */
    // Agrego un validaor de las categorias existentes para que no permita el mismo nombre
    if (category.includes(newCategory)) return;  // retorna y no sigue , SE puede abrir un if con 
                                                // mas pasos si lo necesitamos

      // Remplazamos esto por el string que viene del onNewCategory llamado en el submit 
    setCategory([newCategory, ...category]);
    }

  return (
    <>
    {/* titulo */}
    <h1>GiftExportApp</h1>
    {/* Input 
    
    <button onClick={onAddCategory}>Agregar</button> Dejamos esto para usar un input
    */}
      {/* Importamos el nuevo componente creado
    <AddCategory />
    */}
    <AddCategory 
      //setCategory={setCategory}
      onNewCategory={ onAddCategory }
    />
    {/* Listado de Gift */}
  
      {console.log(category)}
      
      {/* Comentamos esta seccion para remplazarla por un agrupador de categorias
      category.map((category) => {
        //return <li>Hola</li> // Warning: Each child in a list should have a unique "key" prop.
        // cada elemento en map tiene que tener una key unica 
        return <li key={category}>{category}</li>
      
      }) */}
      {/*<div key={category}>
              <h3>{category}</h3>
              <li>{category}</li>
            </div> Comentamos esto para remplazarlo por el GifGrid
          // Este parentecis representa el objeto return que se devuelve implisitamente sin declararlo */ }
      {
        category.map(
          (category) => (
            
          <GifGrid 
            key={ category }
            category={ category } />          
            )  
        )
          }
        {/* Gif Item */}       
    </>
  )
}

