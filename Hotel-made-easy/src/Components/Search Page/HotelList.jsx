import React from 'react';

const HotelCard = ({ imageUrl, rating, price, onAddToCart }) => {
  return (
    <div className="hotel-card">
      <img src={imageUrl} alt="Hotel" className="hotel-image" />
      <div className="hotel-info">
        <div className="rating">Rating: {rating}</div>
        <div className="price">Price: ${price}</div>
        {/* <button onClick={onAddToCart}>Add to Cart</button> */}
      </div>
    </div>
  );
};

const HotelList = ({ hotels }) => {
    return (
      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            imageUrl={hotel.imageUrl}
            rating={hotel.rating}
            price={hotel.price}
            // onAddToCart={() => alert(`Added ${hotel.name} to Cart`)}
          />
        ))}
      </div>
    );
  };
  
  export default HotelList;