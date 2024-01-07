import  { useEffect,useState } from 'react';
import { useCart } from './CartContext';
import './css/shopingCart.css'

const ShoppingCart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };
  
  const incrementQuantity = (product) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: product });
  };

  const decrementQuantity = (product) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: product });
  };
  const [totalPrice, setTotalPrice] = useState(0);

// Load cart data from localStorage on component mount
useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      dispatch({ type: 'SET_CART', payload: { cart: storedCart } });
    }
  }, [dispatch]);

  
  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = state.cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [state.cart]);

  return (
<main id="cart" style={{maxWidth:'960px'}}>
  <h1 className='h1'>Your Cart</h1>
  <div className="container-fluid">
    <div className="row align-items-start">
      <div className="col-12 col-sm-8 items">
        {console.log(state)}
        {/* <!--1--> */}
        {state.cart.map((item) => (<>
            <div className="cartItem row align-items-start " key={item.id}>
            <div className="col-3 mb-2">
              <img className="w-100" src={item.image} alt="art image"/>
            </div>
            <div className="col-5 mb-2">
              <h6 className="">{item.name}</h6>
              <p className="pl-1 mb-0">Price: {item.price}</p>
              <p className="pl-1 mb-0">status:{item.status}</p>
            </div>
            <div className="col-2 ">
              {/* <p className="cartItemQuantity p-1 text-center">Quantity: {item.qty}</p> */}
              <div className="quantity">
    <a href="#" className="quantity__minus" onClick={() => decrementQuantity(item)}><span>-</span></a>
    <input name="quantity" type="text" className="quantity__input" value={item.qty}/>
    <a href="#" className="quantity__plus" onClick={() => incrementQuantity(item)}><span>+</span></a>
    <i className="material-icons delete" style={{fontSize:'30px',color:'red'}} onClick={() => removeFromCart(item)}>delete</i>
  </div>
            </div>
            <div className="col-2">
              <p id="cartItem1Price">Total: {item.price * item.qty}</p>
            </div>
                       {/* <button type="button" className="btn btn-primary btn-sm m-1" style={{width:'20%'}} onClick={() => incrementQuantity(item)}>
                       &#x2206;
           </button>
           <button style={{width:'20%'}} onClick={() => decrementQuantity(item)} type="button" className="btn btn-primary btn-sm w-2">
            --
           </button> */}
           
          
          </div>
          <hr/>
        </>
      ))}

      </div>
      <div className="col-12 col-sm-4 p-3 proceed form">
        <div className="row m-0">
          <div className="col-sm-8 p-0">
            <h6>Subtotal</h6>
          </div>
          <div className="col-sm-4 p-0">
            <p id="subtotal">Total Price: {totalPrice}</p>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-sm-8 p-0 ">
            <h6>Tax</h6>
          </div>
          <div className="col-sm-4 p-0">
            <p id="tax">0.40</p>
          </div>
        </div>
        <hr/>
        <div className="row mx-0 mb-2">
          <div className="col-sm-8 p-0 d-inline">
            <h5>Total</h5>
          </div>
          <div className="col-sm-4 p-0">
            <p id="total">{totalPrice}</p>
          </div>
        </div>
        <a href="#"><button id="btn-checkout" className="shopnow button1"><span>Checkout</span></button></a>
      </div>
    </div>
  </div>
</main>
  );
};

export default ShoppingCart;
