import React, { useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemCounter } from '../ItemCounter';
import {Link} from  "react-router-dom";


const ItemDetail = ({product}) => {
    
    const {addItem} = useContext(CartContext)  
    const [add, setAdd] = useState(false)

    const onAdd = (count) => {
        setAdd(true)
        addItem(product, count)
    }
    

    return (
        <div className='detailContainer'>
            <div className='detail'>
                <img src={require(`../../images/products/${product.pictureUrl}`).default} alt={`${product.id}-${product.title}`} className='flex-col' />
                <div className='notImgCol'>
                    <div className='textsCol'>
                        <h1 className='detailTitle'>{product.title}</h1>
                        <p className='detailDescription'>{product.description}</p>
                        <h2 className='detailPrice'>$ {product.price}</h2>       
                    </div>
                    { !add ?
                    <ItemCounter stock={product.stock} onAdd={onAdd}/>   
                    : 
                    <>
                        <p className='itemAdded'>The product has been added to cart.</p>
                        <Link to="/cart"><button className='addToCart proceed'>Proceed to Checkout</button></Link>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export {ItemDetail}