import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom"


const Categorias = [
    {catId:1, nombre: "Home", ruta:"/"},
    {catId:2, nombre: "Products", ruta:"/products"},
    {catId:3, nombre: "About us", ruta:"/about"},
];

const ItemLink = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        const promesaCat = new Promise((res,rej) => {
            res(Categorias);
        });

        promesaCat.then((res) => setCategorias(res))
    }, []);

    return(
        <>
        {categorias.map((categoria) => {
            return(
                <li key={categoria.catId} className="item">
                    <NavLink exact activeClassName="activeLink" className="textItem" to={categoria.ruta}>{categoria.nombre}</NavLink>
                    <div className={`box1 caja${categoria.catId}`} ></div> {/* Estos extra divs son para darle efectos despues con hover */}
                    <div className={`box2 caja${categoria.catId}`} ></div> {/* Estos extra divs son para darle efectos despues con hover */}
                </li>
            )
        })}
        </>
    )
}

export default ItemLink
