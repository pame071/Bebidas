import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Craer el context
export const CategoriasContext = createContext();

// Provide es donde se encuentran las funciones y state
const CategoriasProvider = (props) =>{

   //crear el state del context
   const [ categorias, guardarCategorias] = useState([]);

   //ejecutar el llamado a la api
   useEffect(() =>{
      const obtenerCategorias = async () =>{
         const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
         const categoria = await axios.get(url);

         guardarCategorias(categoria.data.drinks);
      }
      obtenerCategorias();
   }, [])

   return (
      <CategoriasContext.Provider
         value={{
            categorias
         }}
      >
         {props.children}
      </CategoriasContext.Provider>
   )
}

export default CategoriasProvider;