import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config";

let newsCollection = collection(db, "news");

// HANDLE: get news
export const getNews = async () => {
  let snapShot = await getDocs(newsCollection);
  let news = await snapShot.docs.map((_doc) => {
    return {
      ..._doc.data(),
      _id: _doc.id,
    };
  });
  return news;
};

// HANDLE: get new by id
export const getNewById = async (_id: string) => {
  let docRef = doc(db, "news", _id);
  let snapShot = await getDoc(docRef);
  return {
    _id: snapShot.id,
    ...snapShot.data(),
  };
};
