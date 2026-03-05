import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "products");
    const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef;

    getDocs(q).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(products);
    });
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;