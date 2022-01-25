import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { ItemDetail } from "../../components/ItemDetail"
import { getFirestore } from '../../firebase' 
import Lottie from "react-lottie"
import spinner from "../../animations/75869-img176sprinter.json"

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})

    
    const [loading, setLoading] = useState(true)

    const  { itemId }  = useParams()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: spinner,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    useEffect(() => {
        setLoading(true)
        
        const bd = getFirestore()
        const productCollection = bd.collection("products")

    setTimeout(()=> {
        productCollection.get().then(value => {
            let datos = value.docs.map(e => {
                return {...e.data(), id: e.id}
            
            })
            const singleProd = datos.find((e) => e.id === itemId);
            setProduct(singleProd)
            setLoading(false)
    })},1500)
    }, [itemId])

    return loading ? <div className="lottie"><Lottie options={defaultOptions} width={500} /></div> : <ItemDetail product={product} />
       
}

export default ItemDetailContainer