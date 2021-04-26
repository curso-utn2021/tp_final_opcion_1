import axios from "axios";
import React from "react";

export default function LibroCard(props) {
  function sacarWarningDeVariableNoUsada(variable) {}

  const onPrestar = async () => {
    try {
    } catch (error) {
      alert(error.message);
    }

    setMostrarModalPrestar(true);
  };

  const onDevolver = async () => {
    try {
      var respuesta = await axios.put("http://localhost:3001/libro/devolver/" + props.id);
      sacarWarningDeVariableNoUsada(respuesta);
      props.refrescame();
    } catch (error) {
      alert(error.message);
    }
  };

  const onEditar = async () => {
    try {
      var respuesta = await axios.put("http://localhost:3001/libro/devolver/" + props.id);
      props.history.push("/libros");
      sacarWarningDeVariableNoUsada(respuesta);
    } catch (error) {
      alert(error.message);
    }
  };

  const onBorrar = async () => {
    try {
      var respuesta = await axios.put("http://localhost:3001/libro/devolver/" + props.id);
      props.history.push("/libros");
      sacarWarningDeVariableNoUsada(respuesta);
    } catch (error) {
      alert(error.message);
    }
  };

  async function traerPersonasDeServer() {
    try {
      let respuesta = await axios.get("http://localhost:3001/persona");
      console.log("respuesta dentro de funcion ", respuesta.data);

      return respuesta.data;
    } catch (error) {
      alert(error.message);
    }
  }
  let listaPersonas = traerPersonasDeServer();

  console.log("respuesta fuera de funcion", listaPersonas);

  const [mostrarModalPrestar, setMostrarModalPrestar] = React.useState(false);
  let selector = <select name="select"></select>;

  /* 
    var opciones = [
    <option key="10" value="dummy value">
      dummy description
    </option>,
  ];

  selector = <select name="select">{opciones}</select>;
*/
  return (
    <div className="libroCard">
      <div> {props.nombre}</div>
      <div> Id libro {props.id}</div>

      <div> {props.descripcion}</div>
      <div> Id Cat{props.categoria_id}</div>
      <div> Prestado a {props.persona_id}</div>

      <div className="botoneraInCard">
        <button className="botonTransparentado" onClick={onPrestar}>
          Prestar
        </button>
        <button className="botonTransparentado" onClick={onDevolver}>
          Devolver
        </button>
        <button className="botonTransparentado" onClick={onEditar}>
          Editar
        </button>
        <button className="botonTransparentado" onClick={onBorrar}>
          Borrar
        </button>
      </div>

      {mostrarModalPrestar && (
        <div className="modal">
          {" "}
          <h2>modal</h2>
          <div>{selector}</div>
          <div>
            <button onClick={() => setMostrarModalPrestar(false)}>Cerrar</button>{" "}
            <button onClick={() => setMostrarModalPrestar(false)}>Prestar</button>{" "}
          </div>
        </div>
      )}
    </div>
  );
}
