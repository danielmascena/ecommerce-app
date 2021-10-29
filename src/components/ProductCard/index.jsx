
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
  const extraAttr = ariaLabel ? {
    role: ariaLabel
  } : null;
  console.log(product)
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

export default ProductCard;
