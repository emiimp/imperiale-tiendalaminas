const Item = ({ image,title,artist,price }) => {
  return (
    <>
    <img width={'300px'} src={image} alt={title}/>
    <h2>{title}</h2>
    <h2>{artist}</h2>
    <h3>{price}</h3>
    </>
  );
};

export default Item;