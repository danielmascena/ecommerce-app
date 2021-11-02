import {
  ACTION_LOADING_PRODUCT,
  ACTION_SEARCH_TERM,
  ACTION_RESET_STATE,
} from "./types";

export function loadingProduct(status) {
  return {
    type: ACTION_LOADING_PRODUCT,
    payload: status
  }
};

export function searchProducts (term) {
  return {
    type: ACTION_SEARCH_TERM,
    payload: term
  }
};

export function resetState () {
  return {
    type: ACTION_RESET_STATE
  }
};
