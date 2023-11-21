// ViewOrderPage.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { viewOrder, cancelOrder, getMaxOrderId, viewOrderWithId } from '../Reducer/orderReducer';
import { useNavigate } from 'react-router-dom';

const ViewOrderPage = ({ orders }) => {
  const [orderIdInput, setOrderIdInput] = useState('');
  console.log('Viewing order with ID:', orderIdInput);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [viewOrderTrue, setViewOrderTrue]= useState(false);
  const [orderIdNA,setOrderIdNA] =useState(false);
  const [viewOrder1, setViewOrder1]= useState([]);
  const [orderDetail, setOrderDetail]= useState(null);
  const [orderId2, setOrderId2] = useState('');
  const [orderItems, setOrderItems] = useState(null);
  const [orderType, setOrderType] = useState('');

  const handleViewOrder = async() => {
    // Dispatch the action to view the order with the specified orderId
      const orderId1=Number(orderIdInput);
      console.log("all orders" , orders);
      if(orderId1<= getMaxOrderId(orders)){
       console.log("view order 1", orders[orderId1]);
       setViewOrderTrue(true);
       setViewOrder1(viewOrderWithId(orders,orderId1));

       try {
        const response = await fetch(`http://localhost:3001/orderDetails/${orderId1}`);
        if (response.ok) {
          const orderDetails = await response.json();
          console.log('Order details:', orderDetails);
          setOrderDetail(orderDetails);
          setOrderId2(orderDetails.orderDetails.orderId);
          setOrderItems(orderDetails.orderDetails.orderDetails);
          setOrderType(orderDetails.orderDetails.orderType);
          console.log("orderDetails 1111111",viewOrder1);
          console.log("Order Deatil 11111", orderDetail);
          // ... handle the retrieved order details ...
        } else {
          console.error('Error fetching order details:', response.statusText);
          setViewOrderTrue(false);
        }
        // Rest of your code for handling the response...
      } catch (error) {
        console.error('Error fetching order details:', error);
        setViewOrderTrue(false);
        // Handle error
      }

      }
      else{
        setViewOrderTrue(false);
        console.log("Orderid is not available");
        setOrderIdNA(true);

      }
    //dispatch(viewOrder(Number(orderIdInput)));
    //dispatch(viewOrder(parseInt(orderIdInput, 10)));
  };

  const handleCancelOrder =async () => {
    // Dispatch the action to cancel the order with the specified orderId
    setOrderIdNA(true);
    dispatch(cancelOrder(Number(orderIdInput)));

    try {
      const response = await fetch(`http://localhost:3001/deleteOrder/${orderIdInput}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Order deleted successfully');
        navigate('/orderdeleted');
      } else {
        console.error('Error deleting order:', response.statusText);
        // Handle error
      }
      // Rest of your code for handling the response...
    } catch (error) {
      console.error('Error deleting order:', error);
      // Handle error
    }
    navigate(`/cancelOrderPage?orderId=${orderIdInput}`);
  };

  return (
    <div>
      <h2>View Order</h2>
      <label htmlFor="orderIdInput">Order ID:</label>
      <input
        type="numeric"
        id="orderIdInput"
        value={orderIdInput}
        onChange={(e) => setOrderIdInput(e.target.value)}
      />
      <button onClick={handleViewOrder}>View Order</button>
      {
  viewOrderTrue ? (
    // viewOrder1.length > 0 ? (
    //   <div key={viewOrder1[0].orderDetails.orderId}>
    //     {/* Display order details here */}
    //     <p>Order ID: {viewOrder1[0].orderDetails.orderId}</p>
    //     <p>Cart: {viewOrder1[0].orderDetails.cart[0].id}</p>
    //     <p>Order Type: {viewOrder1[0].orderDetails.orderType}</p>
    //     {/* Add more order details */}
    //     <button onClick={handleCancelOrder}>Cancel Order</button>
    //     <p>-----------------------------------------</p>
    //   </div>
    // ) : (
    //   <p>No order found with the specified ID</p>
    // )
    <div key={orderId2}>
        {/* Display order details here */}
        <p>Order ID: {orderId2}</p>
         <p>Cart: {orderItems}</p>
         <p>Order Type: {orderType}</p>
        {/* Add more order details */}
        <button onClick={handleCancelOrder}>Cancel Order</button>
        <p>-----------------------------------------</p>
      </div>
  ) : (
    orderIdNA ?  <p>No order found with the specified ID</p>:<></>
  )
}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order, // Get orders from the Redux store
  };
};


export default connect(mapStateToProps)(ViewOrderPage);