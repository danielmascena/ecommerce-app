
import ProductCard from "../ProductCard";

import SearchBox from "../SearchBox";

import "./index.css";

const ProductsList = ({products}) => (
  <section>
    <SearchBox />
    <div className="product-table"
        role="table"
        aria-label="Products List"
        aria-describedby="products_table_desc"
        aria-rowcount={products.length}>
      <div id="products_table_desc">List of Products</div>
      <div role="rowgroup">
        <div className="product-row" role="row">
          <span role="columnheader" aria-sort="none">Name</span>
          <span role="columnheader" aria-sort="none">Price</span>
        </div>
      </div>
      <div role="rowgroup">
      {products.map((product) => (
        <div role="row" key={product.id}>
          <ProductCard product={product} ariaLabel="cell" />
        </div>
      ))}

      </div>
    </div>
  </section>
);

export default ProductsList;
