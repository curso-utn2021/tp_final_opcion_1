import PersonaCard from "./personaCard";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Personas() {
  let personas = [];
  const [listaPersonas, setlistaPersonas] = React.useState([{ nombre: "persona1" }, { nombre: "persona2" }]);

  React.useEffect(async () => {
    var respuesta = await axios.get("http://localhost:3001/persona");

    setlistaPersonas(respuesta.data);
  }, []);

  listaPersonas.forEach((element, index) => {
    personas.push(<PersonaCard nombre={element.nombre} key={index} />);
  });

  return (
    <div className="seccion">
      <div className="titulo">
        {" "}
        <h2>Personas (prestatarios)</h2>{" "}
      </div>{" "}
      <div className="coleccionCards"> {personas} </div>
      <div className="botonesDeSeccion">
        {" "}
        <button> Alta</button>{" "}
      </div>
      <div className="links">
        Links de la sección personas (prestatarios):
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
            <Link to="/categorias">Ir a categorias</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
