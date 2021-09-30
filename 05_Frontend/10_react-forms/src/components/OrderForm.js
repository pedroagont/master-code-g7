import useForm from '../hooks/useForm';

function OrderForm() {
  const { formData, handleChange, handleSubmit } = useForm(handleOrderForm);

  function handleOrderForm() {
    // console.log('Hola desde el callback!', formData);
    const { pedido, nombre, direccion, telefono } = formData;
    alert(
      `Hola ${nombre}! Tu pedido de ${pedido} está en camino a ${direccion} y te avisarán al ${telefono}`
    );
  }

  function handleImgPedido() {
    if (!formData.pedido) {
      return (
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff1%2F04%2Fd2%2Ff104d20b8a1dc6f7c8b30899aacc3ada.jpg"
          alt="cupcake"
        />
      );
    }

    if (formData.pedido === 'chocolate') {
      return (
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Flifemadesimplebakes.com%2Fwp-content%2Fuploads%2F2018%2F02%2FUltimate-Chocolate-Cupcakes.jpg"
          alt="cupcake"
        />
      );
    }

    if (formData.pedido === 'vanilla') {
      return (
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop.lifesmokevapors.com%2Fwp-content%2Fuploads%2F2013%2F04%2Fvanilla-cupcake-3.jpg"
          alt="cupcake"
        />
      );
    }

    if (formData.pedido === 'caramel') {
      return (
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecakeblog.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fcaramel-bourbon-vanilla-cupcakes-thumb-lg-600x600.jpg"
          alt="cupcake"
        />
      );
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleImgPedido}>
      <h2 className="form-title">
        ¡ Pide tu cupcake aquí {formData.nombre && formData.nombre} ! 🧁
      </h2>

      <div className="img-container">{handleImgPedido()}</div>

      <label htmlFor="flavour-select" className="form-label">
        Sabor de tus cupcakes
      </label>
      <select
        name="pedido"
        id="flavour-select"
        className="form-input"
        onChange={handleChange}
        value={formData.pedido || ''}
        required
      >
        <option value="">Escoge una opción..</option>
        <option value="chocolate">Chocolate</option>
        <option value="vanilla">Vanilla</option>
        <option value="caramel">Caramelo</option>
      </select>

      <label className="form-label">Nombre</label>
      <input
        className="form-input"
        type="text"
        name="nombre"
        placeholder="Juan Pérez"
        onChange={handleChange}
        autoComplete="off"
        value={formData.nombre || ''}
        required
      />

      <label className="form-label">Direccion</label>
      <input
        className="form-input"
        type="text"
        name="direccion"
        placeholder="Av Litman #34"
        onChange={handleChange}
        autoComplete="off"
        value={formData.direccion || ''}
        required
      />

      <label className="form-label">Teléfono</label>
      <input
        className="form-input"
        type="text"
        name="telefono"
        placeholder="984 362 4557"
        onChange={handleChange}
        autoComplete="off"
        value={formData.telefono || ''}
        required
      />

      <input className="form-submit" type="submit" value="Enviar form!" />
    </form>
  );
}

export default OrderForm;
