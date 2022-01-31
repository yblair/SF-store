

import Producto from './Producto';
import ProductosJson from './productos.json';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion'
import {useState} from 'react';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './Navigation';



let productos = ProductosJson;


const App = ({setIsUser,isUser}) => {
  const [paginaActual,setPagina] = useState(1)
	const totalporPagina = 4
	
	let productos = ProductosJson
	productos = productos.slice((paginaActual -1) * totalporPagina,
	paginaActual * totalporPagina  );

	const getTotalProductos = () =>{
		let cantidadDeProductos = ProductosJson.length;
		 return Math.ceil(cantidadDeProductos / totalporPagina);
	}



  return (
	  <div>

    <BrowserRouter>
	<Navigation/>


<PageWrapper> 
    {productos.map(productos=>    
      <Producto name={productos.name} price={productos.price} muted={productos.muted} img={productos.img}/>
	  )}
<Paginacion pagina = {paginaActual} total = {getTotalProductos()} onChange = {(pagActual)=>{
	setPagina(pagActual)
	
}}/>


    
       
             

	</PageWrapper>


	</BrowserRouter>
    
</div>
        
        
        



    
  );
}

export default App
