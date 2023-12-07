import React from "react";
import HotelList from "./HotelList"
import './search.css'
import Paper from '@mui/material/Paper';
import { Box, Container, CssBaseline } from "@mui/material";


const SearchPage = ()=>{

    const hotels = [{
        name:'',
        imageUrl:'',
        rating:'',
        price:''
    }]

    return(
        <>
        <Container>
            <Box>
                <HotelList hotels={hotels}/>
            </Box>
        </Container>
        </>
    )

}


export default SearchPage;