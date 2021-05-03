import axios from "axios";
import React from "react";


const EdicionCategoria = ({setCategoria, categoria, categoriaId, callBack, setHidden}) => (<>
  <input type="text" name="categoria" placeholder="nombre" value={categoria} onChange={(e)=> setCategoria(e.target.value)}/>
  <button onClick={() => editarCategoria(categoria, categoriaId, callBack, setHidden)}>Guardar</button>
</>
);

const editarCategoria = async (categoria, categoriaId, callBack, setHidden) => {
  try {
    await axios.put("http://localhost:3001/categoria/" + categoriaId, {"nombre": categoria});
    setHidden(false);
    callBack(true);
  } catch(e) {
    console.log(e.message);
    console.log("No se pudo editar la categoria.");
  }
}

export default function CategoriaCard(props) {
  const [nombreCategoria, setNombreCategoria] =  React.useState('');
  const [hidden, setHidden] =  React.useState(false);

  const borrarCategoria = async () => {
    try {
      await axios.delete("http://localhost:3001/categoria/" + props.id);
      setHidden(false);
      props.callBack(true);
    } catch (e) {
      console.log(e.message);
      console.log("No se pudo crear la categoria.");
    }
  }
  
  return (
    <div className="categoriaCard">
      <div> {props.nombre} </div>

      { hidden ? <EdicionCategoria setCategoria={setNombreCategoria} categoria={nombreCategoria} categoriaId={props.id} callBack={props.callBack} setHidden={setHidden} /> : null }

      <div className="botoneraInCard">
        <button className="botonTransparentado" onClick={()=> setHidden(!hidden)}>Editar</button>
        <button className="botonTransparentado" onClick={borrarCategoria}>Borrar</button>
        <button className="botonTransparentado" onClick={()=>props.onLibros(props.id)}>Libros</button>
      </div>
    </div>
  );
}
