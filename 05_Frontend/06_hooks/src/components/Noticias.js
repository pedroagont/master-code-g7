import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Noticias(props) {
  const [noticias, setNoticias] = useState([]);

  // useEffect -> Nos permite controlar el renderizado de componentes funcionales
  // Similar a utilizar el método componentDidMount(), componentDidUpdate(), etc en componentes clase
  // Sintaxis: useEffect(callback, []) (si agregamos como segundo argumento un arreglo vacío optimizamos el renderizado)

  const getNoticias = () => {
    const URL_RTVNEWS = 'http://www.rtve.es/api/noticias.json';
    axios.get(URL_RTVNEWS)
      .then(response => setNoticias(response.data.page.items))
      .catch(error => console.log(error))
  }

  useEffect(() => getNoticias(), []);

  const renderizarNoticias = () => {
    if (noticias.length === 0) {
      return <h2>Cargando noticias...</h2>
    } else if (noticias.length > 0){
      return (
        <>
          <h2> Se encontraron { noticias.length } noticias </h2>
          <div>
            {
              noticias.map(noticia => {
                return <Card key={ noticia.id } titulo={noticia.title} descripcion={noticia.longTitle} imagen={noticia.image} url={noticia.htmlUrl}/>
              })
            }
          </div>
        </>
      );
    }
  }

  return (
    <>
      {
        renderizarNoticias()
      }
    </>
  );
}

export default Noticias;
