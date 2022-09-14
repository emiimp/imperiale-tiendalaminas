const ItemDetail = ({product}) => {
  console.log(product);
  return (
    <div>
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.artist}</p>
      <p>{product.price}</p>
      <img src={product.image} />
    </div>
  )
}

export default ItemDetail