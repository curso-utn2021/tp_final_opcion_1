export default function LibroCard(props) {
  return (
    <div className="libroCard">
      <div> {props.nombre}</div>

      <div className="botoneraInCard">
        <button className="botonTransparentado">Prestar</button>
        <button className="botonTransparentado">Devolver</button>
        <button className="botonTransparentado">Editar</button>
        <button className="botonTransparentado">Borrar</button>
      </div>
    </div>
  );
}
