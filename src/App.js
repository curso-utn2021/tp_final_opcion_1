import "./App.css";
import Estante from "./components/estante";
import Prestatarios from "./components/prestatarios";
import Categorias from "./components/categorias";
import Inicio from "./components/inicio";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Inicio} />
        <Route path="/estante" component={Estante} />
        <Route path="/prestatarios" component={Prestatarios} />
        <Route path="/categorias" component={Categorias} />
      </Router>
    </div>
  );
}

export default App;
