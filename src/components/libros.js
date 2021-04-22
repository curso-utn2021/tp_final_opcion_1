import LibroCard from "./libroCard";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Libros() {
  let libros = [];

  const [listado, setListado] = React.useState([{ nombre: "libro1" }, { nombre: "libro2" }]);

  React.useEffect(async () => {
    var respuesta = await axios.get("http://localhost:3001/libro");

    setListado(respuesta.data);
  }, []);

  listado.forEach((element, index) => {
    libros.push(<LibroCard nombre={element.nombre} key={index} />);
  });

  return (
    <div className="seccion">
      <div className="titulo">
        {" "}
        <h2> Estante de la biblioteca </h2>{" "}
      </div>

      <div className="coleccionCards"> {libros} </div>
      <div className="botones">
        {" "}
        <button> Alta</button>{" "}
      </div>

      <div className="links">
        Links de la sección Estante:
        <div>
          {" "}
          <div>
            {" "}
            <Link to="/">Ir al inicio</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/prestatarios">Ir a personas (prestatarios)</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/categorias">Ir a categorias</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
