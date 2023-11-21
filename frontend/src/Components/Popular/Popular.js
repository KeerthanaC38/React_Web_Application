import React from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = ({ accessories }) => {
  return (
    <div className='popular'>
      <h1>Accessories</h1>
      <hr />
      <div className="popular-item">
        {Array.isArray(accessories) && accessories.length > 0 ? (
          accessories.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              manufacturer={item.manufacturer}
              condition={item.condition}
              discount={item.discount}
              description={item.description}
              warranty={item.warranty}
              rebates={item.rebates}
            />
          ))
        ) : (
          <h3>Accessories for the products added in cart will be displayed here.</h3>
        )}
      </div>
    </div>
  );
};

export default Popular;