import React, { useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';

export default function CartScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const productId = params.id;
    const { search } = useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
        navigate('/signin?redirect=shipping');
    }
    return (
        <div className='row top'>
            <div className='col-2'>
                <h1>Shopping Cart</h1>

                {cartItems.length === 0 ?
                <MessageBox>
                    Cart is empty <Link to='/'>Go shopping</Link>
                </MessageBox>
                : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.product}>
                                <div className='row'>
                                    <div>
                                        <img src={item.image} alt={item.name} className='small' />
                                    </div>
                                    <div className='min-30'>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select
                                            value={item.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(item.product, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(item.countInStock).keys()].map(
                                                (x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div>${item.price}</div>
                                    <div>
                                        <button type='button'
                                            onClick={() => removeFromCartHandler(item.product)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='col-1'>
                <div className='card card-body'>
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} {cartItems.reduce((a, c) => a + c.qty, 0) === 1 ? 'item' : 'items'}): ${cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
                            </h2>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}