
import Navbar from './components/Navbar';
import Content from './components/Content';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
function App() {
  return (
    <>
       <Navbar />
       <CartProvider>
        <Content />
       <Cart />
       </CartProvider>
       
    </>
  ); 
}

export default App;
