import { useEffect, useState } from "react"
import CategoryList from "../../components/CategoryList"
import Categorias from "../../mock/Categorias"
import { useParams } from "react-router-dom"

const CategorySelector = () => {
    // Acá va la Promise

   const [categories, setCategories] = useState([]) //Ponemos un estado porque simulamos que lo vamos a traer de una API
   
   

   useEffect(() => {
      const categoryPromise = new Promise((res, rej) => {
         res(Categorias)
      })
      categoryPromise.then((res) => setCategories(res))
   }, [categories])
   
   return(
      <CategoryList categories={categories} />
      )
}


export default CategorySelector