import PersonaCard from "./prestatarioCard";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Prestatarios() {
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
    <div>
      <div className="prestatarios"> {personas} </div>{" "}
      <div>
        Div de links de funcion Prestatarios
        <div>
          {" "}
          <Link to="/">Ir al inicio</Link>
        </div>
      </div>
    </div>
  );
}
