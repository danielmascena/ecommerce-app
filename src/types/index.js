

/**
 * A Product
 * @typedef {Object} Product
 * @property {number} id - an ID.
 * @property {string} name - the product name.
 * @property {number} price - a decimal value.
 * @property {number} discount - a discount applied to the product value.
 * @property {string[]} images - a collection of images to represent the product visually.
 * @property {string} defaultImage - the main image.
 * @property {string} description - a self description about the product.
 */

const productProps = {
  id: "number",
  name: "string",
  price: "number",
  discount: "number",
  images: ["string"],
  defaultImage: "string",
  description: "string"
};

export class Product {
  static [Symbol.hasInstance](instance) {
    for (const key in productProps) {
      const propType = productProps[key];
      const hasProp = instance.hasOwnProperty(key);
      const instanceProp = instance[key];
      let hasCorrectType = false;
      if (Array.isArray(propType) && Array.isArray(instanceProp)) {
        hasCorrectType = instanceProp.every((val) => propType.includes(typeof val));
      } else {
        hasCorrectType = typeof instanceProp === propType;
      }
      if (!(hasProp && hasCorrectType)) {
        return false;
      }
    }
    return true;
  }
}
