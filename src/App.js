import { Route } from "react-router-dom";

import Home from "./views/products/Home";
import NotFound from "./views/templates/Error404";

function App() {
  return (
    <>
      <Route path="/admin" component={NotFound} />
      <Route path="/" exact component={Home} />
    </>
  );
}

export default App;
