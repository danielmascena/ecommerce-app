
import ProductCard from "../ProductCard";

import "./index.css";

const ProductsList = ({products}) => (
  <section className="list-container">
    <div className="product-table"
        role="table"
        aria-label="Products List"
        aria-describedby="products_table_desc"
        aria-rowcount={products.length}>
      <div id="products_table_desc">List of Products</div>

      <div className="product-grid" role="rowgroup">
      {products.map((product) => (
          <ProductCard product={product} ariaLabel="cell" />
      ))}
      </div>
    </div>
  </section>
);

export default ProductsList;
