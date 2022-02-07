import React from 'react';
import './Cart.css';
const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handlePurchaseProduct }) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);


    return (

        <div className="cart-details">
            <div>
                <button className="button-purchase" onClick={handlePurchaseProduct}>Clear All</button> 
                {/* <button className="button-clear" onClick={handleClearanceProduct}>Clear</button> */}
                {cartItems?.length === 0 && (<div className="Empty-cart">No Item Exist</div>)}
                <div >
                {cartItems && cartItems.map((item) => (
                        <div className="col-6">
                            <div className="cart-purchase " key={item.id}>
                                <div className="cart-product-image"><img src={item.image} alt={item.name} /></div>
                                <div className="cart-info">
                                        
                                <div className="cart-product-quantity">
                                    <div>
                                        <button onClick={() => handleAddProduct(item)}>+</button>
                                        <button onClick={() => handleRemoveProduct(item)}>-</button>
                                    </div>

                                    <div className="cart-product-quantity-no">{item.quantity}</div>
                                </div>
                                

                                    <div className="cart-product-name-price">
                                        <div className="cart-product-name"><h2>{item.name}</h2></div>
                                        <div className="cart-product-price"><h3>₹ {item.price}</h3></div>
                                    </div>
                                </div>
                            </div>
                                
                    </div>))}
                            <div className="cart-product-total-price"><h3>Total</h3><h3> ₹ {totalPrice}</h3></div>
                </div>
                </div>
        </div>
    );
}

export default Cart;
