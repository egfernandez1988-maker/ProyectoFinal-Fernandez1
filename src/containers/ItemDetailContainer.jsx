import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) setItem({ id: docSnap.id, ...docSnap.data() });
    });
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;