import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import { CartTypes } from '../../Reducer/cartReducer';
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';


const Item = (props) => {
  const dispatch = useDispatch();
  const navigate  = useNavigate ();


  const handleAddToCart = () => {
    dispatch({ type: CartTypes.ADD, id: props.id });
    console.log(props.id);
    navigate('/cart'); 

  };

  const handleAddToReview = () => {
    console.log("venu");
    // dispatch({ type: CartTypes.ADD, id: props.id });
    // console.log(props.id);
    console.log("item props",props);

    const propsToSend = {
      // Define the props you want to send
      // For example:
      productId: props.id,
      productName: props.name,
    };
    navigate(`/writeReview?productId=${props.id}&productName=${props.name}&productPrice=${props.price}&productManufacturer=${props.manufacturer}&productCondition=${props.condition}&productCategory=${props.category}&productDiscount=${props.discount}&productWarranty=${props.warranty}&productRebates=${props.rebate}`); 

  };

    
  const handleViewReview = () => {
    console.log("venu");
    // dispatch({ type: CartTypes.ADD, id: props.id });
    // console.log(props.id);
    console.log("item props",props);

    navigate(`/productReviews?productId=${props.id}`); 

  };

  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price">
          ${props.price}
        </div>
      </div>
      <p>Manufacturer: {props.manufacturer}</p>
      <p> Condition: {props.condition}</p>
      <p> Discount: {props.discount}</p>
      <p> Description: {props.description}</p>
      <p> Warranty: {props.warranty}</p>
      <p> Rebates: {props.rebates}</p>
      <button onClick={handleAddToCart} >Buy Now</button>
      <button onClick={handleAddToReview} >Write Review</button>
      <button onClick={handleViewReview} >View Review</button>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  manufacturer: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  warranty: PropTypes.string.isRequired,
  rebates: PropTypes.string.isRequired,
};

export default Item;
