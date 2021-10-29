import requester from "./requester";

/**
 *
 * @return {Promise<object>} result
 */
export const getProducts = async () => requester().get("/products");
