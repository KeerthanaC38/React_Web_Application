import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';

const WriteReview = ({loginDetails}) => {

  const username  = loginDetails.length>0? loginDetails[loginDetails.length - 1].username: 'Venu';


    const [userId, setUserId] = useState('');
   // const [productName, setProductName] = useState('');
    // const [productType, setProductType] = useState('');
    // const [productPrice, setProductPrice] = useState('');
    // const [productMaker, setProductMaker] = useState('');
    // const [manufacturerRebates, setManufacturerRebates] = useState('');
    // const [productOnSale, setProductOnSale] = useState('Yes'); // Assuming it's a boolean field
    const [reviewRating, setReviewRating] = useState('1');
    const [storeID, setStoreID] = useState('Smartgoodsstore');
    const [zipCode, setZipCode] = useState('');
    const [retailerCity, setRetailerCity] = useState('');
    const [retailerState, setRetailerState] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userGender, setUserGender] = useState('male');
    const [userOccupation, setUserOccupation] = useState('');
    const [reviewDate, setReviewDate] = useState('');
    const [reviewText, setReviewText] = useState('');
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const productId = queryParams.get('productId');
    const productName = queryParams.get('productName');
    const productType = queryParams.get('productCategory');
    const productPrice = queryParams.get('productPrice');
    const productMaker = queryParams.get('productManufacturer');
    const manufacturerRebates = queryParams.get('productRebates');
    const productOnSale = 'Yes';
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        // Extracting all the form data
        const formData = {
          username,
          productName,
         productType,
         productPrice,
         productMaker,
          manufacturerRebates,
         productOnSale,
          reviewRating,
          storeID,
          zipCode,
          retailerCity,
          retailerState,
          userAge,
          userGender,
          userOccupation,
          reviewDate,
          reviewText,
        };
    
        // Making a POST request to the server to store the data in MongoDB
        await axios.post('http://localhost:3001/', formData);


    //    fetch('/submitreview', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       }
    //       throw new Error('Review submission failed');
    //     })
    //     .then((data) => {
    //       console.log(data); // Handle success response
    //     })
    //     .catch((error) => {
    //       console.error(error); // Handle error
    //     });
    
        // Optionally, you can handle success or navigate to another page after submission
        console.log('Review submitted successfully!');
        navigate('/reviewSuccess');
      } catch (error) {
        console.error('Error submitting review:', error);
      }
    };
 

  return (
    <div>
    {/* Render your left navigation bar here */}

    <form name="WriteReview" onSubmit={handleSubmit}>
      <div id="content">
        <div className="post">
          <h2 className="title meta">
            <a style={{ fontSize: '24px' }}>Review</a>
          </h2>
          <div className="entry">
            <table className="gridtable">
              <tr>
                <td>UserID:</td>
                <td>
                  {userId}
                  <input
                    type="hidden"
                    name="userid"
                    value={userId}
                  />
                </td>
              </tr>
              <tr>
                <td>Product Name:</td>
                <td>
                  {productName}
                  <input
                    type="hidden"
                    name="productname"
                    value={productName}
                  />
                </td>
              </tr>
              <tr>
                <td>Product Type:</td>
                <td>
                  {productType}
                  <input
                    type="hidden"
                    name="producttype"
                    value={productType}
                  />
                </td>
              </tr>
              <tr>
                <td>Product Price:</td>
                <td>
                  {productPrice}
                  <input
                    type="hidden"
                    name="productprice"
                    value={productPrice}
                  />
                </td>
              </tr>
              <tr>
                <td>Product Maker:</td>
                <td>
                  {productMaker}
                  <input
                    type="hidden"
                    name="productmaker"
                    value={productMaker}
                  />
                </td>
              </tr>
              <tr>
                <td>Manufacturer Rebates:</td>
                <td>
                  {manufacturerRebates}
                  <input
                    type="hidden"
                    name="manufacturerrebates"
                    value={manufacturerRebates}
                  />
                </td>
              </tr>
              <tr>
                <td>Product On Sale:</td>
                <td>
                  {productOnSale}
                  <input
                    type="hidden"
                    name="productonsale"
                    value={productOnSale}
                  />
                </td>
              </tr>
              {/* Add similar rows for other form fields */}
            </table>

            <table>
              <tr>
                <td>Review Rating:</td>
                <td>
                  <select
                    name="reviewrating"
                    value={reviewRating}
                    onChange={(e) => setReviewRating(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>StoreID:</td>
                <td>
                  <select
                    name="storeid"
                    value={storeID}
                    onChange={(e) => setStoreID(e.target.value)}
                  >
                    <option value='Smartgoodsstore'> Smart goods store,6410 N Clark St</option><option value='furniturestore'>Furniture store in Skokie, Illinois</option><option value='targetstore'> Target store 6422 N Sheridan Rd</option><option value='electronicsstore'>Electronics store 1000 W North Ave</option>
        <option value='homeimprovementstore'>Home improvement store 6211 N Lincoln Ave</option>
       <option value='appliancestore'>Appliance store 1300 W North Ave</option>
        <option value='casonastore'> Casona store 5241 N Clark St</option>
        <option value='lowesstore'>lowes store 1360 N Ashland Ave</option>
        <option value='homegoodsstore'> Home goods store 1840 N Clybourn Ave</option>
        <option value='walmartstore'>Walmart store 4650 W North Ave</option>
                    {/* Add options for other stores */}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Retailer Zip Code:</td>
                <td>
                  <input
                    type="text"
                    name="zipcode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Retailer City:</td>
                <td>
                  <input
                    type="text"
                    name="retailercity"
                    value={retailerCity}
                    onChange={(e) => setRetailerCity(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Retailer State:</td>
                <td>
                  <input
                    type="text"
                    name="retailerstate"
                    value={retailerState}
                    onChange={(e) => setRetailerState(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>User Age:</td>
                <td>
                  <input
                    type="text"
                    name="userage"
                    value={userAge}
                    onChange={(e) => setUserAge(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>User Gender:</td>
                <td>
                  <select
                    name="usergender"
                    value={userGender}
                    onChange={(e) => setUserGender(e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>User Occupation:</td>
                <td>
                  <input
                    type="text"
                    name="useroccupation"
                    value={userOccupation}
                    onChange={(e) => setUserOccupation(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Review Date:</td>
                <td>
                  <input
                    type="date"
                    name="reviewdate"
                    value={reviewDate}
                    onChange={(e) => setReviewDate(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Review Text:</td>
                <td>
                  <textarea
                    name="reviewtext"
                    rows="4"
                    cols="50"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    type="submit"
                    className="btnbuy"
                    name="SubmitReview"
                    value="SubmitReview"
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </form>
  </div>



  )
}


const mapStateToProps = (state) => {
  return {
    loginDetails: state.loginDetails, // Get loginDetails from the Redux store
   // totalCartItems: getTotalCartItems(state.cart),
  };
};

export default connect(mapStateToProps)(WriteReview);