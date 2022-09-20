import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../../Pages/ItemListContainer/style.css';
import data from '../../MockData/MockData';
import ItemList from '../../ItemList/ItemList';

const ItemListContainer = () => {

  const [productList, setProductList] = useState([]);
  const { category } = useParams();
  console.log(category);


    useEffect(() => {
      const getProducts =  async() => {
        if(category){
        const response = data.filter((item) => item.category === category)
        setProductList(response)
      }else{;
        const response = data;
        setProductList(response)
      }
    }
      getProducts(); 
    }, [category]);

  return (
    <>
      <ItemList lista={productList}/>
    </>
    )

};


export default ItemListContainer;