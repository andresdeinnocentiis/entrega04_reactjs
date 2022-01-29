import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Total = (props) => {
    const {total} = useContext(CartContext)
    
    return(
        <h1 className={props.className}>{`TOTAL: $${total}`}</h1>
    )
}

export { Total } 