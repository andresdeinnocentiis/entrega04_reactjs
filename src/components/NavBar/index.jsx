import { useContext, useState } from "react"
import CartWidget from "../CartWidget";
import ItemLink from "../ItemLink"
import { CartContext } from "../../context/CartContext"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    const {cart} = useContext(CartContext)

    const [navbarOpen, setNavbarOpen] = useState(false)

    const show = cart.length > 0

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    
    window.addEventListener("resize", () => {
        if(window.innerWidth > 768) {
            setNavbarOpen(false)
        }
    })
    

    return(
        <nav>
            <div className='navfull'>
                
                <div className='logo'><NavLink className='logoLink' to={"/"}>spotba.</NavLink></div>
                <div className='contenedor-Nav'>
                    <div onClick={handleToggle} className="hamb-menu">
                        {navbarOpen ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}
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

            </div>
            
                {navbarOpen ? <div className="toggle-menu">
                                <ItemLink /> 
                                {show && <CartWidget />}
                              </div>
                            : <></>}
            
        </nav>
    )
}



export default NavBar;











