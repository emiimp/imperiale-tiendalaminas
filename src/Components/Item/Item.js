import style from './style.scss';

export const Item = ({ image,title,artist,price }) => {
  return (
    <div className='items'>
    <img src={image} alt={title}/>
    <h2>{title}</h2>
    <h3>{artist}</h3>
    <h4>${price}</h4>
    </div>
  );
};

export default Item;