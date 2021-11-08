import Header from "../Header";
import Footer from "../Footer";

import "./index.css";

const AppContainer = ({children}) => (
  <section className="app-container">
    <Header />
    <main className="app-content">
      {children}
    </main>
    <Footer />
  </section>
);

export default AppContainer;
