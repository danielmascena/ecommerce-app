import { Route } from "react-router-dom";
import Main from "./views/templates/Main";
import Home from "./views/products/Home";
import NotFound from "./views/templates/Error404";

function App() {
  return (
    <Main>
      <Route path="/admin" component={NotFound} />
      <Route path="/" exact component={Home} />
    </Main>
  );
}

export default App;
