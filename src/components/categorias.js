import CategoriaCard from "./categoriaCard";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Categorias() {
  let categorias = [];
  const [listaCategorias, setlistaCategorias] = React.useState([{ nombre: "categoria1" }, { nombre: "categoria2" }]);

  React.useEffect(async () => {
    var respuesta = await axios.get("http://localhost:3001/categoria");

    setlistaCategorias(respuesta.data);
  }, []);

  listaCategorias.forEach((element, index) => {
    categorias.push(<CategoriaCard nombre={element.nombre} key={index} />);
  });

  return (
    <div className="seccion">
      <div className="titulo">
        {" "}
        <h2> Categorías </h2>{" "}
      </div>
      <div className="coleccionCards"> {categorias} </div>{" "}
      <div className="botonesDeSeccion">
        {" "}
        <button> Alta</button>{" "}
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
