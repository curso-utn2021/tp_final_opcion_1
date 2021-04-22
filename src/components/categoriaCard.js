export default function CategoriaCard(props) {
  return (
    <div className="categoriaCard">
      <div> {props.nombre} </div>

      <div className="botonera">
        <button className="botonTransparentado">Editar</button>
        <button className="botonTransparentado">Borrar</button>
      </div>
    </div>
  );
}
