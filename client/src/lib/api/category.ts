import { BASE_URL } from "../environment";
import { Category } from "../types";

export const postCategory = async (category: Category) => {
  await fetch(`${BASE_URL}/category`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(category),
  })
  .then((res) => res.json())
  .then((data) => console.log(data._id))
  .catch((err) => console.error(err));
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/category`)
    return await response.json();
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}