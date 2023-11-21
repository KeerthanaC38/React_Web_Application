import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Css/ProductReviews.css';

const ProductReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const productId = queryParams.get('productId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getReviewsByProductId?productId=${productId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <div>
      <h2>Product Reviews</h2>
      {reviews.length === 0 ? (
        <h3>There are no reviews for this product.</h3>
      ) : (
        reviews.map((review, index) => (
            <div key={index}>
            <table className="gridtable">
              <tr>
                <td>Product Name:</td>
                <td>{review.productName}</td>
              </tr>
              <tr>
                <td>User Name:</td>
                <td>{review.username}</td>
              </tr>
              <tr>
                <td>Product Type:</td>
                <td>{review.productType}</td>
              </tr>
              <tr>
                <td>Product Price:</td>
                <td>{review.productPrice}</td>
              </tr>
              <tr>
                <td>Product Maker:</td>
                <td>{review.productMaker}</td>
              </tr>
              <tr>
                <td>Manufacturer Rebates:</td>
                <td>{review.manufacturerRebates}</td>
              </tr>
              <tr>
                <td>Product On Sale:</td>
                <td>{review.productOnSale}</td>
              </tr>
              <tr>
                <td>Review Rating:</td>
                <td>{review.reviewRating}</td>
              </tr>
              <tr>
                <td>Store ID:</td>
                <td>{review.storeID}</td>
              </tr>
              <tr>
                <td>Zip Code:</td>
                <td>{review.zipCode}</td>
              </tr>
              <tr>
                <td>Retailer City:</td>
                <td>{review.retailerCity}</td>
              </tr>
              <tr>
                <td>Retailer State:</td>
                <td>{review.retailerState}</td>
              </tr>
              <tr>
                <td>User Age:</td>
                <td>{review.userAge}</td>
              </tr>
              <tr>
                <td>User Gender:</td>
                <td>{review.userGender}</td>
              </tr>
              <tr>
                <td>User Occupation:</td>
                <td>{review.userOccupation}</td>
              </tr>
              <tr>
                <td>Review Date:</td>
                <td>{review.reviewDate}</td>
              </tr>
              <tr>
                <td>Review Text:</td>
                <td>{review.reviewText}</td>
              </tr>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductReviews;