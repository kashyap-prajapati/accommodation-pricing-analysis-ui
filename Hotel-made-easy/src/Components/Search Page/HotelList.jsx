import { Button, Card, CardContent, CardHeader, CardMedia, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import '../HotelList'
import './search.css'

const HotelCard = ({hotel,url }) => {
  const handleClick = ()=>{
    window.open(url,"_blank");
  }
 
  return (
    <Card key={hotel?.id}  style={{borderRadius: '10px', marginBottom:'1%',cursor:'pointer'}} onClick={handleClick}>
       <CardContent style={{padding:0,margin:'2%', height:'40%'}} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6} sm={4} md={4} >
                        <CardMedia
                            alt={hotel?.name}
                            component="img"
                            title={hotel?.name}
                            height="185"
                            image={hotel?.imageUrl}
                            style={{borderRadius:'2%'}}
                            >
                        </CardMedia>
                </Grid>
                
                <Grid item xs={1} sm={2} md={6} style={{display: 'flex', alignItems:'flex-start', justifyContent:'space-around', flexDirection:'column'}}>
                    <Typography gutterBottom variant="h5" component="h3" style={{fontWeight:'bolder'}} > 
                      {hotel?.name} 
                    </Typography>
                    <Typography gutterBottom variant='p' component='p' style={{fontWeight:'bold'}}>
                     Rating: {hotel?.score} | Reviews : {hotel?.reviewCount} | {hotel?.reviewDescription}
                    </Typography>
                    <Typography gutterBottom variant='p' component='p' style={{fontWeight:'bold'}}>
                    Address: {hotel?.address}
                    </Typography>
                    <Typography gutterBottom variant='p' component='p' style={{fontWeight:'bold'}}>
                     City:  {hotel?.city}
                    </Typography>
                    <Stack direction="row" spacing={1}  >
                      {
                        hotel?.amenities?.map((item,index)=>{
                          return(
                            <React.Fragment key={hotel?.id+"_"+item}>
                            {
                              index<=4 ? <Chip color="primary" size='small' label={item} /> : null
                            }
                            
                            </React.Fragment>
                          )
                        })
                      }
                       
                    </Stack>
                </Grid>
                <Divider orientation="vertical" style={{height:'13em',color:'black'}} />
                <Grid item style={{display: 'flex', alignItems:'flex-end', justifyContent:'space-around', flexDirection:'column' }}>
                    <Grid item>
                    <Typography variant='h5'>
                      $ {hotel?.price}
                    </Typography>
                    <Typography variant='p'>
                      {hotel?.source ? hotel?.source :"Momondo"}
                    </Typography>
                    </Grid>
                    <Grid item >
                      <Button variant='outlined' size='small'>Visit Website</Button>
                    </Grid>
                </Grid>
                
            </Grid>
        </CardContent>
      
    </Card>
  );
};

const HotelList = ({ hotels,sort }) => {

    return (
      <div className="hotel-list" >
        {hotels.filter(item=>item.price!="").sort((item1,item2)=>
        sort==2?item2?.price-item1?.price:item1?.price-item2?.price)
        .map((hotel, index) => (
          <HotelCard
            key={index}
            hotel={hotel}
            url={hotel?.url}
            // onAddToCart={() => alert(`Added ${hotel.name} to Cart`)}
          />
        ))}
        {hotels && hotels.length==0 && <Typography variant='p' style={{fontSize:'2em',color:'white'}}>No result found</Typography>}
      </div>
    );
  };
  
  export default HotelList;