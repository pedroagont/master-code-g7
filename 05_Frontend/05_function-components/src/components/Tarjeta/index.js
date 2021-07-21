import './style.css'

function Tarjeta(props) {

  // PROPS
  // Propiedades/valores que se pueden pasar para ser renderizados en nuestro componente
  // Los props se pasan al componente como atributos de HTML: <Componente prop1="Soy el prop1" prop2="Soy el prop2" />
  // Para acceder a los props en un componente funcional le pasamos un objeto props al que podemos acceder directamente
  // Los props en React no pueden ser modificados
  // Link de referencia: https://www.w3schools.com/react/react_props.asp

  const { nombre, direccion, telefono, correo, color } = props;

  return <div className="tarjeta-usuario" style={{ background: color }}>
            <p>Nombre: { nombre } </p>
            <p>Dirección: { direccion }</p>
            <p>Telefóno: { telefono }</p>
            <p>Correo: { correo }</p>
         </div>
}

export default Tarjeta;
