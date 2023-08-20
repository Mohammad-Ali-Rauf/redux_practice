import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../state/index';

const Shop = () => {
  const priceStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff',
  };

  const dispatch = useDispatch()
  const { buy, refund } = bindActionCreators(actions, dispatch)

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <img
              src='/sample-product.png'
              className='card-img-top'
              alt='Sample Item'
            />
            <div className='card-body'>
              <h5 className='card-title'>Sample Product</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                <span style={priceStyle}>$</span>25.00
              </h6>
              <p className='card-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, quidem.
              </p>
              <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-danger' onClick={() => buy(25)}>Buy Now</button>
                <button className='btn btn-success' onClick={() => refund(25)}>Refund</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
