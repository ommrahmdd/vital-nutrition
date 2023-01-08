import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
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
// HANDLE: Pagination
export const getTotalDocs = async () => {
  let snapShot = await getDocs(productsCollection);
  return snapShot.docs.length;
};

export const getNextProducts = async (
  _startAfter: number,
  _limit: number,
  returnedLastDoc?: any
) => {
  let load = query(productsCollection, orderBy("en.title"), limit(_limit));
  let firstSnapShot = await getDocs(load);
  let lastDoc = firstSnapShot.docs[firstSnapShot.docs.length - 1];
  let q;
  if (returnedLastDoc) {
    q = query(
      productsCollection,
      orderBy("en.title"),
      startAfter(returnedLastDoc),
      limit(_limit)
    );
  } else {
    q = query(
      productsCollection,
      orderBy("en.title"),
      startAfter(lastDoc),
      limit(_limit)
    );
  }

  let snapShot = await getDocs(q);
  let products = await snapShot.docs.map((_doc) => {
    return {
      ..._doc.data(),
      _id: _doc.id,
    };
  });
  return {
    products,
    lastDoc: snapShot.docs[snapShot.docs.length - 1],
  };
};
// ---------------------
