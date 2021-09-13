import Header from '../components/Header.js';
import OrderForm from '../components/OrderForm.js';

function Home() {
  return (
    <>
      <Header title="Inicio" description="Esta es la página de inicio!" />
      <OrderForm />
    </>
  );
}

export default Home;
