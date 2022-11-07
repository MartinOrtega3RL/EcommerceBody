import fsContexto from "./Contexto";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  query,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { fs } from "../Services/Firebase";
import { useState } from "react";

export default function FirestoreContext(props) {
  const { children } = props;

  return (
    <>
      <fsContexto.Provider value={{ }}>
        {children}
      </fsContexto.Provider>
    </>
  );
}
