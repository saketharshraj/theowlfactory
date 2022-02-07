import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import data from './components/Product/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Home   from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Cart from './components/Cart/Cart';
import Contact from './components/contact/Contact';
function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);

    const ProductMain = productItems.find((item) => item.id === product.id);

    if (ProductExits && ProductMain.stock>0)
    {
      setCartItems(cartItems.map((item) => 
        item.id === product.id ? {
          ...ProductExits, quantity: ProductExits.quantity + 1
        } : item
      ));
      
      ProductMain.stock = ProductMain.stock - 1;
      
    }
    else {
      if (ProductMain.stock > 0) {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        ProductMain.stock = ProductMain.stock - 1;
      }
    }
    
  }
  
  const handleRemoveProduct = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    
    const ProductMain = productItems.find((item) => item.id === product.id);
    if (ProductExits.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      ProductMain.stock = ProductMain.stock + 1;
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ? {
        ...ProductExits, quantity: ProductExits.quantity - 1
      } : item));
      ProductMain.stock = ProductMain.stock + 1;
    } 
  };

  // const handleClearanceProduct = () => {
  //   const value = cartItems.map((item) => productItems.find((product) => item.id === product.id && { stock: product.stock+item.quantity } ));
  //   console.log(value);
  //   setCartItems([]);
  // };

  const handlePurchaseProduct = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} >
              <Home productItems={productItems} handleAddProduct={handleAddProduct}  />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/cart" exact>
              <Cart cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                
                handlePurchaseProduct={handlePurchaseProduct}
               />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
