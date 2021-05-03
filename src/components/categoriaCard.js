import axios from "axios";
import React from "react";

export default function CategoriaCard(props) {
  const [nombreCategoria, setNombreCategoria] =  React.useState('');
  const [hidden, setHidden] =  React.useState(false);

  const borrarCategoria = async (e) => {
    try {
      await axios.delete("http://localhost:3001/categoria/" + props.id);
      setHidden(false);
      props.callBack(true);
    } catch (e) {
      console.log(e.message);
      console.log("No se pudo crear la categoria.");
    }
  }

  const editarCategoria = async (e) => {
    try {
      await axios.put("http://localhost:3001/categoria/" + props.id, {"nombre": nombreCategoria});
      setHidden(false);
      props.callBack(true);
    } catch(e) {
      console.log(e.message);
      console.log("No se pudo editar la categoria.");
    }
  }

  const handleChangeNombre = (e) => {
    setNombreCategoria(e.target.value);
  }

  const EdicionCategoria = () => (<>
      <input type="text" name="categoria" placeholder="nombre" value={nombreCategoria} onChange={handleChangeNombre}/>
      <button onClick={editarCategoria}>Guardar</button>
    </>
  );

  
  return (
    <div className="categoriaCard">
      <div> {props.nombre} </div>

      { hidden ? <EdicionCategoria /> : null }

      <div className="botoneraInCard">
        <button className="botonTransparentado" onClick={()=> setHidden(!hidden)}>Editar</button>
        <button className="botonTransparentado" onClick={borrarCategoria}>Borrar</button>
        <button className="botonTransparentado" onClick={()=>props.onLibros(props.id)}>Libros</button>
      </div>
    </div>
  );
}
