import { useState } from "react";
import { Category } from '../../lib/types';
import { postCategory } from "../../lib/api/category";
import { uploadFile } from "../../lib/api/storage";

export const CreateCategory = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

   const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
     if (event.target.files && event.target.files.length > 0) {
       setSelectedFile(event.target.files[0]);
     }
   };

    const handleSubmit = async (e: any) => {
      e.preventDefault();

      if (!selectedFile) return;

      try {
        const image = await uploadFile(selectedFile);
        const category: Category = { name, description, image };
        await postCategory(category);
      } 
      catch(err) {
        console.error(err);
      }
    };

    return (
      <section>
        <legend>Create Category</legend>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Category Name:</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Category Name"
            />
            <label>Category Description:</label>
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              placeholder="Category Description"
            />
            <label>Category Image:</label>
            <input onChange={handleFileSelect} type="file" />
          </fieldset>
          <button type="submit" id="button">
            Submit
          </button>
        </form>
      </section>
    );
}