import {memo} from "react";
import {Product} from "../../types";

import "./index.css";
 /**
 * @typedef {import('../../types').default} Product
 */

 /**
  * @typedef Props
  * @type {object}
  * @property {Product} product - The product
  * @property {string} ariaLabel - The label for role attribute
  */

 /**
  * ProductCard component
  * @param {Props} props
  */
const ProductCard = ({product, ariaLabel}) => {
  if (product instanceof Product === false) {
    console.error("Product object has incorrect properties");
    return;
  }
  const extraAttr = ariaLabel ? {
    role: ariaLabel
  } : null;
  const {id, defaultImage, name, price} = product;
  return (
    <article
      key={id}
      style={{
        backgroundImage: `url(${defaultImage})`
      }}
      className="product-container"
      {...extraAttr}
    >
      <picture className="product-image" hidden>
        <img src={defaultImage} alt="Default image of the product" aria-hidden="true" />
      </picture>
      <h2 className="product-name">{name}</h2>
      <span className="product-price">Price - ${price}</span>
    </article>
  );
}

function areEqual(prevProps, nextProps) {}

export default memo(ProductCard, areEqual);
