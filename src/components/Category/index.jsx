import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom"
import Categorias from "../../mock/Categorias"


const Category = ({category}) => {
    return(        
        <NavLink key={category.id} activeClassName="activeClass" className="categoryTag" to={category.address}>{category.title}</NavLink>
    )
}

export default Category


