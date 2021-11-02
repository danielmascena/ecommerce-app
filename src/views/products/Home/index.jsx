import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as api from "../../../services";
import ProductsList from "../../../components/ProductsList";

let cacheProducts = [];

const Home = ({
  isLoading,
  searchTerm
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts()
      .then(({data}) => {
        //TODO: implement logger
        setProducts(data);
        cacheProducts = data;
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    //TODO: implement cache for searched terms
    const searchedList = cacheProducts.filter(({name}) => RegExp(searchTerm, 'ig').test(name));
    console.log(searchTerm, searchedList)
    setProducts(searchedList.length ? searchedList : cacheProducts);
  }, [searchTerm]);

  return (
    <section>
      <h1>Products <small>found {products.length}</small></h1>
      <ProductsList products={products} />
    </section>
  )
};

const mapStatetoProps = ({product: {isLoading, searchTerm}}) => (
  {
    isLoading,
    searchTerm
  }
);

export default connect(mapStatetoProps)(Home);
