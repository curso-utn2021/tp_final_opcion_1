import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div>
      <div>
        Div de links de funcion Inicio
        <div>
          <div>
            {" "}
            <Link to="/estante">Ir al Estante de libros</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/prestatarios">Ir al ABM de prestatarios</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/categorias">Ir al ABM de categorias</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
