import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as api from "../../../services";
import ProductsList from "../../../components/ProductsList";
import SearchBox from "../../../components/SearchBox";

import "./index.css";

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
    <section className="home-container">
      <h1 className="home-heading">Welcome to Product Home page</h1>
      <div className="home-search">
        <p>Products <small>found {products.length}</small></p>
        <SearchBox />
      </div>
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
