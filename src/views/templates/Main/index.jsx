import Header from "../Header";
import Footer from "../Footer";

const Main = ({children}) => (
  <section>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </section>
);

export default Main;
