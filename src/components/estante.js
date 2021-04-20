import Libro from "./libro";
import axios from "axios";
import React from "react";

export default function Estante() {
  let libros = [];

  const [listado, setListado] = React.useState([]);

  React.useEffect(async () => {
    var respuesta = await axios.get("http://localhost:3001/libro");

    setListado(respuesta.data);
  }, []);

  listado.forEach((element, index) => {
    libros.push(<Libro nombre={element.nombre} key={index} />);
  });

  return <div className="estante"> {libros} </div>;
}
