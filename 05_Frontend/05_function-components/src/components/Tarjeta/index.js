import './style.css'

function Tarjeta(props) {
  const { nombre, direccion, telefono, correo, color } = props;

  return <div className="tarjeta-usuario" style={{ background: color }}>
            <p>Nombre: { nombre } </p>
            <p>Dirección: { direccion }</p>
            <p>Telefóno: { telefono }</p>
            <p>Correo: { correo }</p>
         </div>
}

export default Tarjeta;
