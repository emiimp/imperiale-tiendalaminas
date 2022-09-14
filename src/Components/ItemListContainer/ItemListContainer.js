import { useEffect, useState } from 'react';
import style from '../../Components/ItemListContainer/style.css';
import data from '../MockData/MockData';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response)
    })
  }, []);

  const getProducts =  new Promise((resolve,reject) => {
      setTimeout(() => {
        //setProductList(data)
        resolve(data)
      }, 2000)
    })


  return (
    <>
      <div className="greeting">{greeting}</div>

      <ItemList lista={productList}/>
    </>
    )
  };
  
export default ItemListContainer;