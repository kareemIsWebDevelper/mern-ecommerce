import {BASE_URL} from "../environment";
import {Product, Products} from "../types";

// Post Product To Backend Endpoint
export const postProduct = async (product: Product) => {
  await fetch(`${BASE_URL}/product`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}; 


export const getProducts = async (): Promise<Products[]> => {
  try {
      const response = await fetch(`${BASE_URL}/product`)
      return await response.json();
    } 
    catch (error) {
      console.error(error);
      throw error;
    }
}


export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/product/${id}`);
    return await response.json();
  }
  catch (err) {
    console.error(err);
  }
}