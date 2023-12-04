import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
   
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    const handlePayNow = () => {
        let handler = window.ClanePayPop.setup({
            key: 'vb_tk_azyweqwpwes', // Replace with your public key
            email: 'lydiafagbenle24@gmail.com',
            amount: cartTotal,
            onClose: function () {
                console.log("Window closed.");
            },
            callback: function (response) {
                console.log(response);
            }
        });
        handler.openIframe();
    }
    if (isEmpty) return <h1 className='text-center'>Your cart is empty</h1>
    return (
        <section className='a-container'>
             <div className='row justify-content-center '>
                <div className='col-12'>
                    <h5> Cart ({totalUniqueItems}) total items: ({totalItems}) </h5>
                    <table className='table table-light table-hover m-0 '>
                        <tbody>
                        {items.map((item, index)=>{
                            return (
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height: '6rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity ({item.quantity})</td>
                                <td>
                                    <button
                                      className='btn btn-info ms-2'
                                      onClick={() => updateItemQuantity(item.id, item.quantity - 1 )}
                                      >-</button>
                                    <button 
                                       className='btn btn-info ms-2'
                                       onClick={() => updateItemQuantity(item.id, item.quantity + 1 )}
                                    >+</button>
                                    <button
                                     className='btn btn-danger ms-2'
                                     onClick={() => removeItem(item.id)}
                                     >Remove item</button>
                                </td>
                             </tr>
                             )
                        })}
                        </tbody>
                    </table>
                </div>
            <div className='col-auto ms-auto'>
                <h2>Total Price: $ {cartTotal} </h2>
            </div>
            <div className='col-auto'>
                <button className='btn btn-danger m-2'
                onClick={() => emptyCart()}
                >Clear Cart</button>

                <button className='btn btn-primary m-2' onClick={() => handlePayNow()}> 
                    Pay now
                </button>
            </div>
        </div>
        </section>
       
    );
};

export default Cart;