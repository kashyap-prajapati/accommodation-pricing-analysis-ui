import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import React from 'react';

const HotelCard = ({ imageUrl, rating, price, onAddToCart }) => {
  return (
    <Card>
        <CardHeader title={'The taj hotel'}></CardHeader>
        <CardContent>
            <div className="hotel-card">
            <img src={imageUrl} alt="Hotel" className="hotel-image" />
            <div className="hotel-info">
                <div className="rating">Rating: {rating}</div>
                <div className="price">Price: ${price}</div>
                {/* <button onClick={onAddToCart}>Add to Cart</button> */}
            </div>
            </div>
        </CardContent>
        <CardMedia image={'https://www.canva.com/b716658d-c676-449e-9a86-fb495b387c5c'}>

        </CardMedia>
    </Card>
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