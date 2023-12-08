import { Card, CardContent, CardHeader, CardMedia, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import '../HotelList'
import './search.css'

const HotelCard = ({ imageUrl, rating, price, onAddToCart }) => {
  return (
    <Card  style={{borderRadius: '10px', marginBottom:'1%'}}>
       <CardContent style={{padding:0,margin:'2%', height:'40%'}} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6} sm={4} md={4} >
                        <CardMedia
                            alt="GeeksforGeeks"
                            component="img"
                            title="GeeksforGeeks"
                            height="185"
                            image='https://www.momondo.ca/rimg/himg/10/32/52/leonardo-2137519-Lobby_O-073906.jpg'
                            style={{borderRadius:'2%'}}
                            >
                        </CardMedia>
                </Grid>
                
                <Grid item xs={1} sm={2} md={6} style={{display: 'flex', alignItems:'flex-start', justifyContent:'space-around', flexDirection:'column'}}>
                    <Typography gutterBottom variant="h4" component="h2" > 
                       GeeksforGeeks 
                    </Typography>
                    <Typography gutterBottom variant='p' component='p' style={{fontWeight:'bold'}}>
                      8.0 | Very good | 370 reviews
                    </Typography>
                    <Typography gutterBottom variant='p' component='p' style={{fontWeight:'bold'}}>
                      Toronto
                    </Typography>
                    <Typography gutterBottom variant='p' component='p' style={{fontWeight:'bold'}}>
                      Address
                    </Typography>
                    <Stack direction="row" spacing={1}  >
                        <Chip label="Extra Soft" style={{borderRadius:'10px'}} />
                        <Chip color="primary" label="Soft" />
                        <Chip label="Medium" />
                        <Chip label="Hard" />
                    </Stack>
                </Grid>
                <Divider orientation="vertical" style={{height:'13em',color:'black'}} />
                <Grid item xs={1} sm={2} md={1} style={{display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
                    <Typography variant='h4'>
                        $25
                    </Typography>
                    <Typography variant='p'>
                       Mamondo
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