function OrderForm() {

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form enviado!');
  }

  return (
    <form className="form" onSubmit={ handleSubmit }>
      <h2 className="form-title">Pide tu cupcake aquí! 🧁</h2>

      <label for="pet-select" className="form-label">Sabor de tus cupcakes</label>
      <select name="pedido" id="pet-select" className="form-input">
          <option value="" disabled selected>Escoge una opción..</option>
          <option value="chocolate">Chocolate</option>
          <option value="vainilla">Vainilla</option>
          <option value="redVelvet">Red Velvet</option>
      </select>

      <label className="form-label">Nombre</label>
      <input className="form-input" type="text" name="nombre" placeholder="Juan Pérez" onChange={ handleChange } autoComplete="off" />

      <label className="form-label">Direccion</label>
      <input className="form-input" type="text" name="direccion" placeholder="Av Litman #34" onChange={ handleChange } autoComplete="off" />

      <label className="form-label">Teléfono</label>
      <input className="form-input" type="text" name="telefono" placeholder="984 362 4557" onChange={ handleChange } autoComplete="off" />

      <input className="form-submit" type="submit" value="Enviar form!"/>
    </form>
  );
}

export default OrderForm;
