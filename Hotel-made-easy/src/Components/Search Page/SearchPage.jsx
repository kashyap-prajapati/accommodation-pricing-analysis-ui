import React from "react";
import HotelList from "./HotelList"
import './search.css'


const SearchPage = ()=>{

    const hotels = [{
        name:'',
        imageUrl:'',
        rating:'',
        price:''
    }]

    return(
        <>
            <HotelList hotels={hotels}/>
        </>
    )

}


export default SearchPage;