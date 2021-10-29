import { ACTION_LOADING_PRODUCT } from "../actions/types";

/**
 * @typedef Action
 * @type {object}
 * @property {string} type - an type.
 * @property {string} payload - your name.
 */

/**
* @typedef state
* @type {object}
* @property {boolean} isLoading - data loading.
*/


/** @type {State} */
export const initialState = {
  isLoading: false
};



/**
 * @params {State}
 * @params {Action}
 * @returns
 */
export default function productReducer (state = {}, {type, payload}) {
  switch (type) {
    case ACTION_LOADING_PRODUCT:
      return {
        ...state,
        isLoading: payload
      };
    default:
      return state;
  }
}
