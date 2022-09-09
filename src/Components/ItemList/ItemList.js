import Item from "../Item/Item";

const ItemList = ({lista}) => {
    console.log(lista);
  return (
    <div>
        {
            lista.map((product)=>(
                <Item 
                key={product.id}
                title={product.title} 
                artist={product.artist} 
                price={product.price} 
                image={product.image}/>
            ))
        }
    </div>
  )
}

export default ItemList