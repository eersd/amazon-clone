import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{basket}] = useStateValue();
    return (
        <div className="payment">
                <h1>Checkout {basket?.length} items </h1>
            <div className="payment__block">
                <div className="payment__leftArea">
                    <h2>User Info:</h2> 
                </div>
                <div className="payment__userInfo">
                    <h3>John Doe</h3>
                    <p><h3>Musterstr. 42</h3></p>
                    <p><h3>12345, Berlin</h3></p>
                    <p><h3>Deutschland</h3></p>
                </div>
            </div>

            <div className="payment__block">
                <div className="payment__leftArea">
                    <h2>Review Cart: </h2>
                </div>
                <div className="payment__basket">
                    {basket?.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title} 
                            image={item.image} 
                            price={item.price} 
                            rating={item.rating}
                             />
                    ))}
                </div>
            </div>

            <div className="payment__block">
                <div className="payment__leftArea">
                    <h2>Choose Payment method:</h2>
                </div>
                <div className="payment__method">
                    <h2>To test stripe, use the credit card number 424242424242</h2>
                    <CurrencyFormat
                        renderText={(value) =>(
                            <div className="payment__methodBox">
                                <p>
                                    Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                                </p>
                                <input type="text" placeholder="Card number">
                                </input>
                                <button> Buy now </button>
                            </div>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                    
                    />

                </div>
            </div>
        </div>
    )
}

export default Payment;
