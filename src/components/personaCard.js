export default function PersonaCard(props) {
  return (
    <div className="personaCard">
      <div> {props.nombre} </div>
      <div className="botoneraInCard">
        <button className="botonTransparentado">Editar</button>
        <button className="botonTransparentado">Borrar</button>
      </div>
    </div>
  );
}
