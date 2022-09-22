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
    </div>
  );
};

export default ItemCount;