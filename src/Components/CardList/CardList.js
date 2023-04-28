import React, { useState, useEffect } from "react";

import CardAppComponent from "../CardAppComponent/CardAppComponent";
import { Link } from "react-router-dom";

import "../../Components/CardList/CardList.css";
import Spinner from "../Spinner/Spinner";

// firebase y firebaseconfig
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


const CardList = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductsData(docs);
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="CardListContainer">
          {productsData.map((data) => {
            return (
              <Link
                to={`products/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardAppComponent productsData={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardList;
