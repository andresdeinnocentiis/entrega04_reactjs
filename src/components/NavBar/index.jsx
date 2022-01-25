import { useContext } from "react"
import CartWidget from "../CartWidget";
import ItemLink from "../ItemLink"
import { CartContext } from "../../context/CartContext"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    const {cart} = useContext(CartContext)

    const show = cart.length > 0

    return(
        <nav className='navfull'>
            
            <div className='logo'><NavLink className='logoLink' to={"/"}>spotba.</NavLink></div>
            <div className='contenedor-Nav'>
                <div className="hamb-menu">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="close-menu">
                    <i className="fa fa-close"></i>
                </div>
                <div className='collapse' id="collapse" >
                    <ul className='navbar-nav'>
                        
                        <ItemLink />

                        <li className="item cart-li">
                            {show && <CartWidget />}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
//hoverMenu()


export default NavBar;











