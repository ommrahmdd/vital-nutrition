import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const productsCollection = collection(db, "products");

// HANDLE: get all products
export const getProducts = async () => {
  let snapShot = await getDocs(productsCollection);
  let products = await snapShot.docs.map((_doc) => {
    return {
      ..._doc.data(),
      _id: _doc.id,
    };
  });
  return products;
};
