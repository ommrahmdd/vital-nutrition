import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const partnersCollection = collection(db, "partners");

// HANDLE: get all partners
export const getAllPartners = async () => {
  let snapShpt = await getDocs(partnersCollection);
  return snapShpt.docs.map((_doc) => ({
    _id: _doc.id,
    ..._doc.data(),
  }));
};
