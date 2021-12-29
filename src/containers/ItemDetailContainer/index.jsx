import React from 'react'
import { useEffect, useState } from "react"
import MockedItems from "../../mock/MockedItems"
import { useParams } from 'react-router-dom'
import ItemDetail from "../../components/ItemDetail"

const ItemDetailContainer = ({greeting}) => {
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
    }, [itemId])

    return <ItemDetail {...product} />
    
}


export default ItemDetailContainer;