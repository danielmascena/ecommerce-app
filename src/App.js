import { Route } from "react-router-dom";
import AppContainer from "./views/templates/Container";
import Home from "./views/products/Home";
import NotFound from "./views/templates/Error404";

function App() {
  return (
    <AppContainer>
      <Route path="/admin" component={NotFound} />
      <Route path="/" exact component={Home} />
    </AppContainer>
  );
}

export default App;
