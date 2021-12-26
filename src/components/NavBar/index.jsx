
import CartWidget from "../CartWidget/index.js";
import ItemLink from "../ItemLink"

const NavBar = () => {
    return(
        <nav className='navfull'>
            <div className='logo'><p>spotba.</p></div>
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
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
//hoverMenu()


export default NavBar;











