import { ACTION_LOADING_ } from "../actions/types";

/**
 * @typedef Action
 * @type {object}
 * @property {string} type - an type.
 * @property {string} payload - your name.
 */

/**
* @typedef state
* @type {object}
* @
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
export default function (state = {}, {type, payload}) {
  switch (type) {

    default:
      return state;
  }
}
