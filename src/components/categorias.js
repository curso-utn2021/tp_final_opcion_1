import CategoriaCard from "./categoriaCard";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Categorias() {
  let categorias = [];
  const [listaCategorias, setlistaCategorias] = React.useState([{ nombre: "categoria1" }, { nombre: "categoria2" }]);

  React.useEffect(async () => {
    var respuesta = await axios.get("http://localhost:3001/persona");

    setlistaCategorias(respuesta.data);
  }, []);

  listaCategorias.forEach((element, index) => {
    categorias.push(<CategoriaCard nombre={element.nombre} key={index} />);
  });

  return (
    <div>
      <div className="categorias"> {categorias} </div>{" "}
      <div>
        Div de links de funcion Categorias
        <div>
          {" "}
          <Link to="/">Ir al inicio</Link>
        </div>
      </div>
    </div>
  );
}
