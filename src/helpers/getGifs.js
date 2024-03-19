export const getGifs = async(category) => {
    const url =   `https://api.giphy.com/v1/gifs/search?api_key=3a9xmkQJzft5uXnaunHNBP200ljbTmxl&q=${category}&limit=5`  
    const resp = await fetch( url );    // el await requiere que definamos la funcion como async 
    const { data } = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    return gifs
  }
  