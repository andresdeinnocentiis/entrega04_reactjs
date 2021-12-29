import React from 'react';

export const ItemDetail = ({id, title, description, pictureUrl, price, category}) => {
    
    return (
        <div className='detailContainer'>
            <div className='detail'>
                <img src={require(`../../images/products/${pictureUrl}`)} alt={`${id}-${title}`} className='flex-col' />
                <section className='textsCol'>
                    <h1 className='detailTitle'>{title}</h1>
                    <p className='detailDescription'>{description}</p>
                    <h2 className='detailPrice'>$ {price}</h2>
                </section>
            </div>
        </div>
    )
}

export default ItemDetail