import {
  ACTION_LOADING_PRODUCT,
  ACTION_SEARCH_TERM,
  ACTION_RESET_STATE
} from "../actions/types";

/**
* @typedef {import('../../types').default} Product
*/

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
* @property {string} searchTerm - the searched term.
*/

/** @type {State} */
const initialState = {
  isLoading: false,
  searchTerm: '',
};

/**
 * @params {State} - current state
 * @params {Action} - action object
 * @returns {State} - new State
 */
export default function productReducer (state = {}, { type, payload }) {
  switch (type) {
    case ACTION_LOADING_PRODUCT:
      return {
        ...state,
        isLoading: payload
      };
      case ACTION_SEARCH_TERM:
        return {
          ...state,
          searchTerm: payload
        };
      case ACTION_RESET_STATE:
        return initialState;
    default:
      return initialState;
  }
};
