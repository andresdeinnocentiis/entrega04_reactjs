import React, {createContext, useState} from "react";



const CartContext = createContext([])

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [count, setCount] = useState(0)

    

    const isInCart = (id) => {
        let inCart = false
        let item = cart.find(prod => prod.id === id)
        if (item) {
            inCart = true
        }
        return inCart
    }
    
    const addItem = (item, quantity) => { //Si no le aclaro la cantidad, pasa uno solo
       
       const updtItem = cart.find(prod => prod.id === item.id)
        if(count>0) {
            if(!isInCart(item.id)){
             setCart([...cart, {id: item.id, title: item.title, price: item.price, quantity: quantity}])
            } else {
             const newQuant = updtItem.quantity + quantity
             
             setCart(cart.map((prod)=> {
                 if(prod.id === item.id){ 
                     prod.quantity = newQuant
                 }
                 return prod
             }))
            }
        }
        setCount(0)
        
    }

    const removeItem = (item) => {
        setCart(cart.filter(prod => prod.id !== item.id))
        setCount(0)
    }

    const clear = () => {
        setCart([])
    }

    

    

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, count, setCount}}>
            {children}
        </CartContext.Provider>)
}

export {CartContext, CartContextProvider}



















