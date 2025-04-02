import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import { useSelector } from 'react-redux';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
      <Link className="brand" to="/">Mon projet</Link>
      </div>
      <div>
      <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
      </div>
    </header>
    <main>
      <Routes>
      <Route path='/cart/:id?' element={<CartScreen/>}></Route>
        <Route path='/' element={<HomeScreen/>}></Route>
        <Route path='/product/:id' element={<ProductScreen/>}></Route>

      </Routes>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;