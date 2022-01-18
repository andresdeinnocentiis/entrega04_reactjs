import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Total } from "../Total/Total";
const Cart = () => {
    const {cart, addItem, removeItem, clear, sumar, restar, count} = useContext(CartContext)
    
    return(
        <div>
            
            <div className="cartDisplay">
                <h1 className="myCart"> My Cart</h1>
                { cart.length > 0 ?
                <div>
                {
                    cart.map((item)=> {
                        
                        return (
                        <div className="itemLine" key={item.id}>
                            <h1 className="textLine">{`Cod.${item.id} - ${item.title} - $${item.price} - x${item.quantity}`}</h1>
                            <button className='removeItem' onClick={()=>removeItem(item)}>Remove Item</button>
                        </div>
                        )
                    })
                }
                </div> : <h1 className="cartEmpty">Cart is empty. Go to 'Products' section to add some!</h1>}
                
                <Total />
                <div className="btnsContainer cartBtns">
                    <button className='finalizar' onClick={clear}>Proceed To Checkout</button> {/* Por ahora le puse la funcion Clear xqe no tiene hecha logica para facturar */}
                    <button className='removeItem clear' onClick={clear}>Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart 