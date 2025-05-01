import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { signout } from './actions/userActions';
import { useDispatch,useSelector } from 'react-redux';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
      <Link className="brand" to="/">CarPooling</Link>
      </div>
      <div>
      <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? (
                <div className='dropdown'>
                <Link to="#">{userInfo.name}<i className='fa fa-caret-down'></i>{' '}
                </Link>
                <ul className='dropdown-content'>
                  <li>
                  <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                  </Link>
                  </li>
                </ul>
                </div>              
              ):(
                <Link to="/signin">Sign In</Link>
              )
            }
       </div>
    </header>
    <main>
      <Routes>
      <Route path='/cart/:id?' element={<CartScreen/>}></Route>
        <Route path='/' element={<HomeScreen/>}></Route>
        <Route path='/product/:id' element={<ProductScreen/>}></Route>
        <Route path='/signin' element={<SigninScreen/>}></Route>
        <Route path='/register' element={<RegisterScreen/>}></Route>
        <Route path='/signin/shipping' element={<ShippingAddressScreen/>}></Route>
        <Route path='/payment' element={<PaymentMethodScreen/>}></Route>
        <Route path='/placeorder' element={<PlaceOrderScreen/>}></Route>
        <Route path='/order/:id' element={<OrderScreen/>}></Route>

      </Routes>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
