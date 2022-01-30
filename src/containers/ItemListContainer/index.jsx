import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList"
import { useParams } from 'react-router-dom'
import { getFirestore } from "../../firebase"
import Lottie from "react-lottie"
import spinner from "../../animations/38344-sneaker-outlined(1).json"


const ItemListContainer = () => {
   

   const [items, setItems] = useState([]) 

   const [loading, setLoading] = useState(true)

   const  {catId}  = useParams()
   
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
      
      // USO EL setTimeout() SOLAMENTE PARA QUE SE VEA EL SPINNER, PORQUE SINO CARGA DEMASIADO RAPIDO
      setTimeout(()=> {
      productCollection.get().then(value => {
         let datos = value.docs.map(e => {
            return{...e.data(), id: e.id}
         })
         let myData = catId ? datos.filter((item) => item.category === catId) : datos;
            
         if(catId === "all") {
            myData = datos
         }
         setItems(myData)
         setLoading(false)
     })},2000)
   }, [catId])
   
   return(
      loading ? <div className="lottie"><Lottie options={defaultOptions} width={window.innerWidth > 768 ? 500 : 300} /></div> :
      <ItemList items={items}/>)
}

export default ItemListContainer