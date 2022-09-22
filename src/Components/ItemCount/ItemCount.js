import { useState } from 'react';

const ItemCount = ({setCount, count}) => {

    const onAdd = () => {

        setCount(count + 1);
    };
    const onRemove = () => {
      if(count === 0) {
        return;
      }
        setCount(count - 1);
    };

  return (
    <div className="item-count">
      <div>{count} items en el carrito</div>
     
      <button className="item-count__button" onClick={onRemove}>-</button>

      <button className="item-count__button" onClick={onAdd}>+</button>
        
    </div>
  );
};

export default ItemCount;