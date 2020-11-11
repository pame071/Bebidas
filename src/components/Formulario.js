import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

   const [ busqueda, guardarBusqueda] = useState({
      nombre: '',
      categoria: ''
   });

   const { categorias } = useContext(CategoriasContext);
   const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

   //funcion para ller los contenidos
   const ObtenerDatosRecetas = e =>{
      guardarBusqueda({
         ...busqueda,
         [e.target.name]: e.target.value
      })
   }

   const GuardarForm = e =>{
      e.preventDefault();
      buscarRecetas(busqueda);
      guardarConsultar(true);
   }

   return (
      <form 
         className="col-12"
         onSubmit={GuardarForm}
      >
         <fieldset className="text-center">
            <legend>Buscar bebidas por Categoría o Ingrediente</legend>
         </fieldset>

         <div className="row mt-4">
            <div className="col-md-4">
               <input 
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Buscar por Ingrediente"
                  onChange={ObtenerDatosRecetas}
               />
            </div>
            <div className="col-md-4">
               <select
                  className="form-control"
                  name="categoria"
                  onChange={ObtenerDatosRecetas}
               >
                  <option value="">-- Selecciona Categoría --</option>
                  {categorias.map(categotia => (
                     <option 
                        key={categotia.strCategory} 
                        value={categotia.strCategory} 
                     >{categotia.strCategory}</option>
                  ))}
               </select>
            </div>
            <div className="col-md-4">
               <input 
                  type="submit"
                  className="btn btn-block btn-primary"
                  value="Buscar Bebidas"
               />
            </div>
         </div>
      </form>
   );
};

export default Formulario;