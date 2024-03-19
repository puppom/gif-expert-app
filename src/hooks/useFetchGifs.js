import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
// Copiamos todo lo que venia de GifGrid
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true) /// Le defino que estado inicial 
    
    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)  // le decimos que ya las imagenes cargaron
                            // Esto permite que las imagenes no se vuelvan a cargar neuvamente
    }    

    useEffect(() =>{ 
        getImages();
    }, []   // LAS CONDICIONES QUE POPNGA DENTRO DE [] INDICA CUANDO QUEREMOS EJECUTAR LA FUNCION QUE DECLARAMOS ANTES, SI NO LE PONEMOS NADA
            // sOLO EJECUTA LA FUNCION UNA VEZ. eSTO SE USA PARA ***** EVITAR ***** QUE RECREE TODOS LOS OBJETOS CADA VEZ QUE SE ACTUALIZA ALGO 
    )  
 return {
    //image:[],
    //isLoading: false
    // Como esto quedaria image: image y isLLoading: isLoadding podemos dejar solo el elemento
    // react toma el mismo  nombre
    images,
    isLoading
 }
}
