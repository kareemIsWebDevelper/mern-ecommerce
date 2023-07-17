import { useState } from "react";
import { Product } from "../../lib/types";
import { uploadFile } from "../../lib/api/storage";
import { postProduct } from "../../lib/api/product";

export const CreateProduct = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [discount, setDiscount] = useState<string>('');
  const [color, setColor] = useState<string>('');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!selectedFile) return;
   
    const image = await uploadFile(selectedFile);

    const product: Product = {
      name,
      categoryId,
      description,
      quantity,
      price,
      discount,
      color,
      image,
    };
   try {
     await postProduct(product);
   } catch (err) {
    console.error(err);
   }
  };

  return (
    <section>
      <legend>Create Product</legend>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Product Name"
          />
          <label>Category:</label>
          <input
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
            type="text"
            placeholder="Category Id"
          />
          <label>Description:</label>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Product Description"
          />
          <label>Quantity:</label>
          <input
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            type="number"
            placeholder="Quantity"
          />
          <label>Price:</label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            placeholder="Product Price"
          />
          <label>Discount:</label>
          <input
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
            type="number"
            placeholder="Product Discount"
          />
          <label>Color:</label>
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            type="text"
            placeholder="Product Color"
          />
          <label>Product Image:</label>
          <input type="file" onChange={handleFileSelect} />
        </fieldset>
        <button type="submit" id="button">
          Submit
        </button>
      </form>
    </section>
  );
};
