import {ACTION_LOADING_PRODUCT} from "./types";

export function loadingProduct(status) {
  return {
    type: ACTION_LOADING_PRODUCT,
    payload: status
  }
};
