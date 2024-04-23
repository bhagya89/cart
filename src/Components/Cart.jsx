import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, plus ,minus } from '../Features/CartSlice';
// import {plus} from '../Features/CartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const handlePlus = (productId)=>{
      dispatch(plus(productId));
    } 
    const handleMinus = (productId)=>{
      dispatch(minus(productId ));
    }
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">

                        <div className="magniGlass">    
                        <img src={product.image} alt="" />
                        </div>

                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button onClick={() => handlePlus(product.id)}>+</button>
                        <h5>Quantity:{product.quantity}</h5>
                        <button onClick={() => handleMinus(product.id)}>-</button>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;