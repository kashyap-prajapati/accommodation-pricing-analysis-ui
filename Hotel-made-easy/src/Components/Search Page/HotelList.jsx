import { Card, CardContent, CardHeader, CardMedia, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import './search.css'

const HotelCard = ({ imageUrl, rating, price, onAddToCart }) => {
  return (
    <Card >
       <CardContent style={{padding:0}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6} sm={4} md={4}>
                        <CardMedia
                            alt="GeeksforGeeks"
                            component="img"
                            title="GeeksforGeeks"
                            height="150"
                            image='https://www.momondo.ca/rimg/himg/10/32/52/leonardo-2137519-Lobby_O-073906.jpg?width=968&height=968&crop=true'>
                        </CardMedia>
                </Grid>
                
                <Grid item xs={1} sm={2} md={6}>
                    <Typography gutterBottom variant="h5" component="h2"> 
                       GeeksforGeeks 
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2"> 
                       GeeksforGeeks 
                    </Typography>
                    <Stack direction="row" spacing={1} >
                        <Chip label="Extra Soft" />
                        <Chip color="primary" label="Soft" />
                        <Chip label="Medium" />
                        <Chip label="Hard" />
                    </Stack>
                </Grid>
                <Divider orientation="vertical" style={{height:'10em',color:'black'}} />
                <Grid item xs={1} sm={2} md={1}>
                    <Typography>
                        $25
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
      
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