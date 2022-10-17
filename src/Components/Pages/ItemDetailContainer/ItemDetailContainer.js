import { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const { id } = useParams();
  const [item, setItem] = useState({});

  const db = getFirestore();

  const getItem = () => {

    const queryDoc = doc(db, 'products', id);

    getDoc(queryDoc).then((doc) => {

      if (doc.exists()) {
        setItem({ id: doc.id, ...doc.data() });
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer;