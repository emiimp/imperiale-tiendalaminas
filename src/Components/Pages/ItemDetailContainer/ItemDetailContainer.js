import { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import data from "../../MockData/MockData";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const {id} = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    getProducts.then((response) => {
      setItem(response[0])
    })
  }, [id]);

  const getProducts =  new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })

  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer;