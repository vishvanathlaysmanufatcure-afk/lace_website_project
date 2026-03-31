import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const productRef = collection(db, "products");

// ADD PRODUCT
export const addProduct = async (data) => {
  return await addDoc(productRef, data);
};

// GET ALL PRODUCTS
export const getProducts = async () => {
  const snapshot = await getDocs(productRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  return await deleteDoc(doc(db, "products", id));
};

// UPDATE PRODUCT
export const updateProduct = async (id, data) => {
  return await updateDoc(doc(db, "products", id), data);
};