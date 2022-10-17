import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../ItemList/ItemList';
import { Link } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {

  const [productList, setProductList] = useState([]);
  const { category } = useParams();
  console.log(category);

  const db = getFirestore();
  const queryBase = collection(db, 'products');
  const querySnapshot = category ? query(queryBase, where('category', '==', category)) : queryBase;

  useEffect (() => {
    getDocs (querySnapshot).then((answer) => {
      const products = answer.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductList(products);
    });
  }, [category]);

  return (
    <>
      <ItemList lista={productList}/>
    </>
    );
};

export default ItemListContainer;

