import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../../Pages/ItemListContainer/style.css';
import data from '../../MockData/MockData';
import ItemList from '../../ItemList/ItemList';

const ItemListContainer = () => {

  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  
//declarar siempre dentro del useEffect las funciones que mueran acá

    useEffect(() => {
      const getProducts =  async() => {
        if(categoryName){
        const response = data.filter((item) => item.category === categoryName)
        setProductList(response)
      }else{;
        const response = data;
        setProductList(response)
      }
    }
      getProducts(); 
    }, [categoryName]);

  return (
    <>
      <ItemList lista={productList}/>
    </>
    )

};


export default ItemListContainer;