import * as React from 'react';
import HotelList from "./HotelList"
import './search.css';
import { DateRangePicker } from 'react-date-range';
import { Box, Button,  Container, FormControl, Grid,  TextField } from "@mui/material";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const SearchPage = ()=>{
    const handleSelect = (ranges)=>{
        console.log(ranges);
    }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }

    const hotels = [{
        name:'',
        imageUrl:'',
        rating:'',
        price:''
    }];
    
    const [value, setValue] = React.useState([null, null]);

    return(
        <>
        <Container>
            <Box>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }} style={{marginBottom:"1em",marginTop:"2em"}}>
                    <Grid item md={4}>
                        <FormControl>
                            <TextField id="outlined-basic" label="Search by Keyword" variant="filled" ></TextField>
                           
                        </FormControl>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                        />
                    </Grid>
                    <Grid item md={2}>
                        
                        <Button>Submit</Button>
                    </Grid>
                </Grid>
                <HotelList hotels={hotels}/>
            </Box>
        </Container>
        </>
    )

}


export default SearchPage;