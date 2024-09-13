import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <div>

      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/checkout' element={<Checkout />} />

          </Routes>

          <Footer />
          
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
