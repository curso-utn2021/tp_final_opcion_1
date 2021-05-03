import CategoriaCard from "./categoriaCard";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Categorias() {
  let categorias = [];
  const [listaCategorias, setlistaCategorias] = React.useState([]);
  const [nuevaCategoria, setNuevaCategoria] = React.useState('');
  const [reload, setReload] = React.useState(false);
  const [mostrarLibros, setMostrarLibros] = React.useState(null);
  const [listaLibros, setListaLibros] = React.useState([]);

  const cargaDatosDeServer = async () => {
    var respuesta = await axios.get("http://localhost:3001/categoria");

    setlistaCategorias(respuesta.data);
  };

  React.useEffect(() => cargaDatosDeServer(), []);

  React.useEffect(() => {
    setReload(false);
    cargaDatosDeServer();
  }, [reload]);

 
  const handleChangeCategoria = (e) => {
    setNuevaCategoria(e.target.value);
  }
  
  const categoriaLibros = (id) => {
    setMostrarLibros(id);
  }
  
  /*
  listaCategorias.forEach((element, index) => {
    categorias.push(<CategoriaCard nombre={element.nombre} id={element.id} key={`categoria_${element.id}`} callBack={setReload} onLibros={categoriaLibros} />);
  });
  */

  const Categorias = () => (
    <>
      {listaCategorias.map((element, index) => <CategoriaCard nombre={element.nombre} id={element.id} key={`categoria_${element.id}`} callBack={setReload} onLibros={categoriaLibros} />)}
    </>
  )


  const crearCategoria = async () => {
    try {
      const respuesta = await axios.post("http://localhost:3001/categoria", {nombre: nuevaCategoria});
      
      cargaDatosDeServer();
    } catch(e) {
      console.log(e.message);
      console.log("No se pudo crear la categoria.");
    }
  }

  const cargarLibros = async () => {
    if(mostrarLibros != null){
      try {
        const respuesta = await axios.get("http://localhost:3001/libro/categoria_id/"+ mostrarLibros);
        console.log(respuesta.data);
        setListaLibros(respuesta.data);
      } catch(e) {
        console.log(e.message);
        console.log("No se encontraron libros para esta categoria.");
        setListaLibros([]);
      }
    }
  }

  React.useEffect(() => cargarLibros(), [mostrarLibros]);

  let ListadoLibros = () => (
  <div> 
  <h3>{(listaCategorias.find((elem) => elem.id == mostrarLibros)).nombre}</h3><br/>
  <div>
    <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Prestado a</th>
        </tr>
    </thead>
    <tbody>
    
    {listaLibros.map((elem)=> (
      <tr>
        <td>{elem.id}</td>
        <td>{elem.nombre}</td>
        <td>{elem.descripcion}</td>
        <td>{elem.persona_id}</td>
      </tr>

    ))}
    </tbody>
    </table>
    </div>
  </div>)

  return (
    <div className="seccion">
      <div className="titulo">
        {" "}
        <h2> Categorías </h2>{" "}
      </div>
      <div className="botonesDeSeccion">
        <input type="text" name="categoria" placeholder="Categoria" onChange={handleChangeCategoria}></input>
        <button onClick={crearCategoria}> Crear categoria </button>{" "}
      </div>
      <div className="coleccionCards"> {<Categorias />} </div>{" "}
      <div className="categoriaLibros">
        { mostrarLibros ? <ListadoLibros /> : null }
      </div>
      <div className="links">
        Links de la sección Categorías:
        <div>
          {" "}
          <div>
            {" "}
            <Link to="/">Ir al inicio</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/libros">Ir a estante de libros</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/personas">Ir a personas (prestatarios)</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
