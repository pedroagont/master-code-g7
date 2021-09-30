import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Noticias(props) {
  const [noticias, setNoticias] = useState([]);

  // useEffect -> Nos permite controlar el renderizado de componentes funcionales
  // Similar a utilizar el método componentDidMount(), componentDidUpdate(), etc en componentes clase
  // Sintaxis: useEffect(callback, []) (el segundo argumento es un arreglo de dependencias que en caso de que estas cambien, useEffect se vuelve a ejecutar, un arreglo vacío sólo renderiza una vez)

  const getNoticias = () => {
    const URL_RTVNEWS = 'http://www.rtve.es/api/noticias.json';
    axios
      .get(URL_RTVNEWS)
      .then(response => setNoticias(response.data.page.items))
      .catch(error => console.log(error));
  };

  useEffect(() => getNoticias(), []);

  // Conditional rendering
  if (noticias.length === 0) {
    return <h2>Cargando noticias...</h2>;
  }

  return (
    <>
      <h2> Se encontraron {noticias.length} noticias </h2>
      <div>
        {noticias.map(noticia => {
          return (
            <Card
              key={noticia.id}
              titulo={noticia.title}
              descripcion={noticia.longTitle}
              imagen={noticia.image}
              url={noticia.htmlUrl}
            />
          );
        })}
      </div>
    </>
  );
}

export default Noticias;
