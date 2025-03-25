import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product = {} } = productDetails; // Provide default empty object

    useEffect(() => {
        dispatch(detailsProduct(id));
    }, [dispatch, id]);

    if (loading) {
        return <LoadingBox />;
    }

    if (error) {
        return <MessageBox variant="danger">{error}</MessageBox>;
    }

    if (!product || Object.keys(product).length === 0) {
        return <MessageBox variant="danger">Product Not Found</MessageBox>;
    }

    return (
        <div>
            <Link to="/">Back to result</Link>
            <div className='row top'>
                <div className='col-2'>
                    <img 
                        className='large' 
                        src={product.image} 
                        alt={product.name}
                    />
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating 
                                rating={product.rating} 
                                numReviews={product.numReviews}
                            />
                        </li>
                        <li>Price: ${product.price}</li>
                        <li>Description: <p>{product.description}</p></li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Price</div>
                                    <div className='price'>${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Status</div>
                                    <div>
                                        {product.CountInStock > 0 ? (
                                            <span className='success'>In Stock</span>
                                        ) : (
                                            <span className='danger'>Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button 
                                    className='primary block'
                                    disabled={product.CountInStock === 0}
                                >
                                    Add to cart
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
