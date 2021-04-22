export default function PersonaCard(props) {
  return (
    <div className="personaCard">
      <div> {props.nombre} </div>
      <div className="botonera">
        <button className="botonTransparentado">Editar</button>
        <button className="botonTransparentado">Borrar</button>
      </div>
    </div>
  );
}
