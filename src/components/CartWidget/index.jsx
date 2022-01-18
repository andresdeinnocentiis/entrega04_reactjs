import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartCount } from "../CartCount"
import {Link} from  "react-router-dom";

function CartWidget() {
    const {cart} = useContext(CartContext)
    return(
        
        <div className="cart-btn">
            <span className="nav-icon">
                <Link to="/cart"><i className="fas fa-cart-plus"></i></Link>
            </span>
            <div className="cart-items"><CartCount /></div>
        </div>
        
    )
}

export default CartWidget









