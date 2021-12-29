import React from 'react';

export const ItemDetail = ({id, title, description, pictureUrl, price, category}) => {
    
    return (
        <div className='detail-row'>
            <img src={pictureUrl} alt={`${id}-${title}`} className='flex-col' />
            <section>
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>$ {price}</h2>
            </section>
        </div>
    )
}

export default ItemDetail