//import {getGifs} from '../helpers/getGifs.js'  Se comentan porque fueron remplazados  cargados en le Hook
//import { useState , useEffect } from 'react';
import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';
export const GifGrid = ({category}) => {
/* Simulasion recorrido de un array con seccion
const gifs = [1,2,3,4]
  return (
    <>
        <h3>{category}</h3>
        {
            gifs.map(gif => (
                <p>{gif}</p>
               )
            )  
        }
    </>
  )

const getGifs = async() => {
  const url =   `http://api.giphy.com/v1/gifs/search?api_key=3a9xmkQJzft5uXnaunHNBP200ljbTmxl&q=${category}&limit=20`  
  const resp = await fetch( url );    // el await requiere que definamos la funcion como async 
  const { data } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  console.log(gifs);   
}
  */
// Comente todo lo anterior porque voy a islar esta funcion a un archivo separado


// comentamos las sig lineas para poder remplazar este codigo por un hook
/*
const [images, setImages] = useState([])

const getImages = async() => {
  console.log(category)
  const newImages = await getGifs(category)
  setImages(newImages)
}    

useEffect(() =>{ 
    getImages();
  }, []   // LAS CONDICIONES QUE POPNGA DENTRO DE [] INDICA CUANDO QUEREMOS EJECUTAR LA FUNCION QUE DECLARAMOS ANTES, SI NO LE PONEMOS NADA
        // sOLO EJECUTA LA FUNCION UNA VEZ. eSTO SE USA PARA ***** EVITAR ***** QUE RECREE TODOS LOS OBJETOS CADA VEZ QUE SE ACTUALIZA ALGO 
)  
*/

  const {images, isLoading} = useFetchGifs(category);
  console.log(isLoading)

return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}  {/* Esto es un if logico donde solo si es true devuelve
      
      Podriamos usar otra cosa como 
      isLoading ? <h2>Cargando...</h2>} : null
      Esto se lo conoce como ternario donde esta el if y el else pero en este caso 
      al solo tener la parte verdadera no tiene sentido poner el null ya que react no renderiza los null */}
        {/*<ol>*/}
        {/*  Comentamos esto para remplazarlo por GifItem 
        (<li key={id}>{title}</li>)*/}
        <div className="card-grid">      
          {images.map(
          (image) => (
           <GifItem 
              key={image.id}
              {...image}  // Con esto mando todas las props del objeto.
           />
          )
        )}
        </div>
          {/*</ol>*/}
    </>
  )

}
