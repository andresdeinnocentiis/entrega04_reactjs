import React from 'react'
import { useEffect, useState } from "react"
import MockedItems from "../../mock/MockedItems"
import { useParams } from 'react-router-dom'
import ItemDetail from "../../components/ItemDetail"



const ItemDetailContainer = () => {
    console.log(MockedItems)
    const [product, setProduct] = useState({})

    console.log("PRODUCT", product)
    const [loading, setLoading] = useState(true)

    const  { itemId }  = useParams()

    console.log(itemId);

    useEffect(() => {
        setLoading(true)
        const itemPromise = new Promise((res, rej) => {
            
            setTimeout(()=> {
            const myData = MockedItems.find((item) => item.id === itemId);
            
            
            
            res(myData)}, 1000)
        })
        itemPromise.then((res) => {
            setProduct(res)
            
        })
        .finally(()=> setLoading(false))
    }, [itemId]);

    return loading ? <h2 className="loading">Cargando producto...</h2> :
    <ItemDetail {...product} />
       
}


export default ItemDetailContainer;