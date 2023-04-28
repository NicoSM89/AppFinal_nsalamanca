import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardAppComponent from "../../Components/CardAppComponent/CardAppComponent";

// componentes

const ProductsPhoto = () => {
  const [productsData, setProductData] = useState([]);

  let { type } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"), where("type", "==", type));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductData(docs);
    };
    getProducts();
  }, [type]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Types of Products</h1>
      {productsData.map((data) => {
        return <CardAppComponent productsData={data} key={data.id} />;
      })}
    </div>
  );
};

export default ProductsPhoto;
