import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../MockData/MockData";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts.then((response) => {
      setProduct(response[0])
    })
  }, []);

  const getProducts =  new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer