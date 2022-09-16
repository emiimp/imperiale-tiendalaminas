import { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import data from "../../MockData/MockData";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const {id} = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts.then((response) => {
      setProduct(response[0])
    })
  }, [id]);

  const getProducts =  new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })

  return (
    <div>
      {product && <ItemDetail product={product}/>}
    </div>
  )
}

export default ItemDetailContainer;