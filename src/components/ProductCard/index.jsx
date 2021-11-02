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
    throw new Error("Product object has incorrect properties");
  }
  const extraAttr = ariaLabel ? {
    role: ariaLabel
  } : null;

  return (
    <article>
      <picture>
        <img src={product.defaultImage} alt="Default image of the product" aria-hidden="true" />
      </picture>
      <span {...extraAttr}>{product.name}</span>
      <span {...extraAttr}>${product.price}</span>
    </article>
  );
}

function areEqual(prevProps, nextProps) {}

export default memo(ProductCard, areEqual);
