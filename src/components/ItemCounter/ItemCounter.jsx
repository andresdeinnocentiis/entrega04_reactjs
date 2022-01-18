import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from "../../context/CartContext"
import {Link} from  "react-router-dom";

const ItemCounter = ({product, onAdd}) => {
    const {cart, addItem, removeItem, count, setCount} = useContext(CartContext)  
    

    const sumar = () => {
        if(count<product.stock) { //Minimo control de stock - solo hace que no se pueda exceder del stock de cada producto,

            setCount(prevCount => prevCount+1)
            
        } 
    }
    const restar = () => {
        if(count>0){
            setCount(prevCount => prevCount-1)
        }
    }

    return (
        <>
            <div className='detailBtns'>
                <button className='btnCount restar' onClick={restar}>-</button>
                <p>{count}</p>
                <button className='btnCount sumar' onClick={sumar}>+</button> {/*//SI NO FUNCIONA PROBAR MANDANDO addItem como un {OBJETO}*/}
            </div>
            <div>
                <div className='btnsContainer'>
                    <button className='addToCart' onClick={()=> onAdd() }>Add to cart</button> {/*//SI NO FUNCIONA PROBAR MANDANDO addItem como un {OBJETO}*/}
                    <button className='removeItem' onClick={()=> removeItem(product)}>Remove item</button>
                </div> 
            </div>
        </>
    )
}

export { ItemCounter }