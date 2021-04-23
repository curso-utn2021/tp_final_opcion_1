export default function CategoriaCard(props) {
  return (
    <div className="categoriaCard">
      <div> {props.nombre} </div>

      <div className="botoneraInCard">
        <button className="botonTransparentado">Editar</button>
        <button className="botonTransparentado">Borrar</button>
      </div>
    </div>
  );
}
