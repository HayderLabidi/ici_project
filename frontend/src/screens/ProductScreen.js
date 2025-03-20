import React from 'react';
import data from '../Data';
import { useParams , Link} from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox'; // Add this line to import the MessageBox component

export default function ProductScreen() {
    const { id } = useParams();
    const product = data.products.find((x) => x._id === Number(id) );
    const loading = false;
    const error = null;
    return (
      <div>
        { loading ?(
            <LoadingBox></LoadingBox>
          )
          : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>
              <Link to='/'>Back to result</Link>
              <div className="row top">
                  <div className="col-2">
                      <img className="large" src={product.image} alt={product.name} />
                      <div className="col-1">
                        <ul>
                          <li>
                            <h1>{product.name}</h1>
                          </li>
                          <li>
                            <Rating rating={product.rating}></Rating>
                          </li>
                          <li>
                            Price: ${product.price}
                          </li>
                          <li>
                            Category: {product.category}
                          </li>
                          <li>
                            Description: <p>{product.description}</p>
                          </li>
                        </ul>
                      </div>
                      <div className='col-1'>
                        <div className='card card-body'>
                          <ul>
                            <li>
                              <div className='row'> 
                                <div>
                                  Price:
                                </div>
                                <div className='price'>
                                  ${product.price}
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='row'>
                                <div>Status: </div>
                                <div>
                                  {/* TERNER  === if else */}
                                  {product.CountInStock > 0 ?(
                                    <span className='success'>In stock</span>
                                  ) : (
                                    <span className='danger'>Unvaialble</span>
                                  )}
                                </div>
                              </div>
                            </li>
                            <li>
                              <button className='primary block'>Add to cart</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          )
        }
      </div>
    );
}