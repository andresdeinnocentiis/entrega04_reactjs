// Llamada a la API o la promesa
// Manejo de estados
// Trae un item list
// Ese item list va a mappear item y los devuelve como lista

import { useEffect, useState } from "react"
import MockedItems from "../../mock/MockedItems"
import ItemList from "../../components/ItemList"

const ItemListContainer = () => {
   
   // Acá va la Promise

   const [items, setItems] = useState([]) //Ponemos un estado porque simulamos que lo vamos a traer de una API

   useEffect(() => {
      const itemPromise = new Promise((res, rej) => {
         setTimeout(()=> {res(MockedItems)}, 2000)
      })
      itemPromise.then((res) => setItems(res))
   }, [items])
   
   return(
      <ItemList items={items}/>)
}

export default ItemListContainer