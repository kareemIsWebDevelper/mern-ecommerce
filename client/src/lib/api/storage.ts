import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../init";

export const uploadFile = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `categories/${file.name}`);
  await uploadBytes(storageRef, file);
  const image = await getDownloadURL(storageRef);

  return image;
};
