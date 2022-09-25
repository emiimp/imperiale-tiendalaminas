const ItemCount = ({ stock, price, count, setCount }) => {

    const agregar = () => {
        if (count < stock) {
        setCount(count + 1);
        };
    };

    const quitar = () => {
        if (count > 0) {
        setCount(count - 1);
        };
    };

  return (
    <div className="item-count">

      <button onClick={quitar}>
        -
      </button>

      <p>{count}</p>

      <button onClick={agregar}>
        +
      </button>


      <span>
        Total: ${count * price}
      </span>

    </div>
  );
};

export default ItemCount;