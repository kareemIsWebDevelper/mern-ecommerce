import { BASE_URL } from "../environment";

// Post Request To Backend Endpoint
export const addCartItem = async (productId) => {
  try {
    fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
  } catch (err) {
    console.log(err);
  }
}

// Delete Request To Backend Endpoint
export const deleteCartItem = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

// Get Request From Backend Endpoint
export const getCartItems = async () => {   
  try {
    const response = fetch(`${BASE_URL}/cart`);
    const data = await (await response).json();
    const cartLength = data.length;
      
    localStorage.setItem("cartLength", cartLength);
      
    return data;
  } catch (err) {
    console.error(err);
  }
};
