import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = ({ productItems, handleAddProduct }) => {
  return (
    <div>
    <div className="contain">
      {productItems.map((productItems) => (
        <div className="row col-4">
          <div key={productItems.id}>
            <div className="product-image">
              <img src={productItems.image} alt={productItems.name} />
            </div>
            
            <div className="details">
              <div className="product-name">
                <h2>{productItems.name}</h2>
              </div>
              <div className="product-stock">
                <h4>Available {productItems.stock}</h4>
              </div>
              <div className="product-price">
                <h3>₹{productItems.price}</h3>
              </div>
              <div>
                <button
                  className="addtocart"
                  onClick={() => handleAddProduct(productItems)}
                >
                  Add to Cart
                </button>
                
              </div>
              
            </div>
            
          </div>
        </div>
      ))}  
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <p style={{fontFamily:"sans-serif", fontSize:"30px"}}>We sell high quality T-shirts. You must try it.</p>
    </div>
    
    <div className="contact">
      <h1>Contact Us</h1>
      
      <p>
        <a href="mailto: theowlfactory.hjp@gmail.com "
          target="_blank"
          rel="noopener noreferrer"
        >
            <button style={{height:"45px", width:"70px", marginTop:"25px"}}>Mail Me</button>
        </a>
       
      </p>
      <p style={{marginTop:"30px"}}>
            Phone Number : 7632022043, 7366961779 
        </p>
        <p style={{marginTop:"30px", marginBottom:"50px"}}>
           Copyright © 2022 The Owl Factory. All rights reserved.
        </p>

    </div>
    </div>
  );
};

export default Home;
