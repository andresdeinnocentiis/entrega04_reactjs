import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Total } from "../Total";
import {Link} from  "react-router-dom";
import Lottie from "react-lottie"
import spinner from "../../animations/75869-img176sprinter.json"

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext)
    const [loading, setLoading] = useState(true)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: spinner,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
   
    setTimeout(()=> { setLoading(false)}, 1000) // Esto es SOLAMENTE para usar el spinner, no tiene otra funcionalidad

    

    if(loading){
        return(
            <div className="lottie">
                <Lottie options={defaultOptions} width={window.innerWidth > 768 ? 500 : 300} />
            </div>)
    } else {
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
                            <h1 className="textLine">{`- ${item.title} - $${item.price} - x${item.quantity}`}</h1>
                            <button className='removeItem' onClick={()=>removeItem(item)}>Remove Item</button>
                        </div>
                        )
                    })
                }
                </div> 
                    : 
                <>
                    <h1 className="cartEmpty">Cart is empty. Go to 'Products' section to add some!</h1>
                    <Link className="returnLink" to={"/products"}>See all products</Link>
                </>
                }
                
                <Total className="total"/>
                <div className="btnsContainer cartBtns">
                    <Link className={`${cart.length === 0?"disabled":"finalizar enabDisab"}`} disabled={cart.length === 0} to={cart.length === 0?"#":"/checkout"}>Proceed To Checkout</Link>
                    <button className='removeItem clear enabDisab' disabled={cart.length === 0} onClick={clear}>Clear Cart</button>
                </div>
            </div>
        </div>
    )}
}

export default Cart 