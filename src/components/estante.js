import LibroCard from "./libroCard";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Estante() {
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
    <div>
      <div className="estante"> {libros} </div>
      <div>
        Div de links de funcion Estante
        <div>
          {" "}
          <Link to="/">Ir al inicio</Link>
        </div>
      </div>
    </div>
  );
}
