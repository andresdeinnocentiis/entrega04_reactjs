// Llamada a la API o la promesa
// Manejo de estados
// Trae un item list
// Ese item list va a mappear item y los devuelve como lista

import { useEffect, useState } from "react"
import MockedItems from "../../mock/MockedItems"
import ItemList from "../../components/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
   
   // Acá va la Promise

   const [items, setItems] = useState([]) //Ponemos un estado porque simulamos que lo vamos a traer de una API

   const [loading, setLoading] = useState(true)

   const  {catId}  = useParams()
   
   useEffect(() => {
      setLoading(true)
      const itemPromise = new Promise((res, rej) => {
         
         setTimeout(()=> {
            let myData = catId ? MockedItems.filter((item) => item.category === catId) : MockedItems;
            
            if(catId === "all") {
               myData = MockedItems
            }
            res(myData)}, 2000)
      })
      itemPromise.then((res) => {
         setItems(res)
      })
      .finally(()=> setLoading(false))
   }, [catId])
   
   return(
      loading ? <h2 className="loading">Cargando productos...</h2> :
      <ItemList items={items}/>)
}

export default ItemListContainer