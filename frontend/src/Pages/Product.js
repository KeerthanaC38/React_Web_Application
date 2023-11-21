import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Item from '../Components/Item/Item'; // Update the path to Item.js

const Product = () => {
  const { all_product, filteredProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const productsToDisplay = filteredProducts.length ? filteredProducts : all_product;
  const product = productsToDisplay.find((e) => e.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Item
        id={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
        manufacturer={product.manufacturer}
        condition={product.condition}
        discount={product.discount}
        description={product.description}
        warranty={product.warranty}
        rebate={product.rebate}
      />
      {/* Add other details you want to display */}
    </div>
  );
};

export default Product;