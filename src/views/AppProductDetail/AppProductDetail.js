import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// firebase - firestore

import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardAppComponent from "../../Components/CardAppComponent/CardAppComponent";

import "./AppProductDetail.css";

const AppProductDetail = () => {
  const [productsData, setProductsData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductsData(docs);
    };
    getProducts();
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Products Details</h1>
      {productsData.map((data) => {
        return <CardAppComponent productsData={data} key={data.id} />;
      })}
    </div>
  );
};

export default AppProductDetail;
