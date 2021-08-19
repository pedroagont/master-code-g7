import useForm from '../hooks/useForm';

function OrderForm() {

  const handleOrderForm = () => {
    // console.log('Hola desde el callback!', formData);
    const { pedido, nombre, direccion, telefono } = formData;
    alert(`Hola ${nombre}! Tu pedido de ${pedido} está en camino a ${direccion} y te avisarán al ${telefono}`);
  }

  const { formData, handleChange, handleSubmit } = useForm(handleOrderForm);

  return (
    <form className="form" onSubmit={ handleSubmit }>
      <h2 className="form-title">Pide tu cupcake aquí! 🧁</h2>

      <label htmlFor="pet-select" className="form-label">Sabor de tus cupcakes</label>
      <select name="pedido" id="pet-select" className="form-input" onChange={ handleChange } value={formData.pedido || ''} required>
          <option value="">Escoge una opción..</option>
          <option value="chocolate">Chocolate</option>
          <option value="vainilla">Vainilla</option>
          <option value="redVelvet">Red Velvet</option>
      </select>

      <label className="form-label">Nombre</label>
      <input className="form-input" type="text" name="nombre" placeholder="Juan Pérez" onChange={ handleChange } autoComplete="off" value={formData.nombre || ''} required />

      <label className="form-label">Direccion</label>
      <input className="form-input" type="text" name="direccion" placeholder="Av Litman #34" onChange={ handleChange } autoComplete="off" value={formData.direccion || ''} required />

      <label className="form-label">Teléfono</label>
      <input className="form-input" type="text" name="telefono" placeholder="984 362 4557" onChange={ handleChange } autoComplete="off" value={formData.telefono || ''} required />

      <input className="form-submit" type="submit" value="Enviar form!"/>
    </form>
  );
}

export default OrderForm;
