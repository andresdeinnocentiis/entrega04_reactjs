import React, { useState } from 'react';


const ItemCounter = ({stock, onAdd}) => {
    
    const [count, setCount] = useState(0)

    const sumar = () => {
        if(count<stock) { 

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
                <button className='btnCount restar' disabled={count===0} onClick={restar}>-</button>
                <p>{count}</p>
                <button className='btnCount sumar' disabled={count===stock} onClick={sumar}>+</button> 
            </div>
            {
                count===stock? <p className='maxStock'>Max stock reached*</p> : <></>
            }
            <div>
                <div className='btnsContainer'>
                    <button className='addToCart' disabled={count===0} onClick={()=> onAdd(count) }>Add to cart</button> 
                </div> 
            </div>
        </>
    )
}

export { ItemCounter }