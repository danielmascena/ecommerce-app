import {useEffect, useState} from "react";

import * as api from "../../../api";
import ProductsList from "../../../components/ProductsList";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts()
      .then(({data}) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <section>
      <h1>Products</h1>
      <ProductsList products={products} />
    </section>
  )
};

export default Home;
