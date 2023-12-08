import * as React from "react";
import HotelList from "./HotelList";
import "./search.css";
import { DateRangePicker } from "react-date-range";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import FloatingLabelDatePicker from "./FlatPickr";
import axios from 'axios';
import { useOktaAuth } from "@okta/okta-react";

const SearchPage = () => {
  const handleSelect = (ranges) => {
    console.log(ranges);
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const [value, setValue] = React.useState('');
  const[ fromDate, setFromDate] = React.useState('')
  const [toDate, setToDate] = React.useState('')
  const [searchValue, setSearchValue] = React.useState('')
  const [sort,setSort] = React.useState('');
  const [hotels,setHotels] = React.useState([]);
  const { oktaAuth} = useOktaAuth()
  const handleSort = (e) =>{
    setSort(e.target.value);
  }

  const handleDateFrom = (value) => {
    setFromDate(value)
  };
  const handleDateTo = (value) => {
    setToDate(value)
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSubmit = async (keyword, from, To) => {
    console.log({keyword}, {from}, {To})
       await axios.post(`http://localhost:8080/api/v1/search`,{
         keyword:keyword,
         fromDate:from,
         toDate: To
      }).then( res => {
        setHotels(res?.data)
      }).catch(err => {
    
      })
  }


  React.useEffect(()=>{
    handleSubmit("","2023-12-09","2023-12-10");
  },[])

  const handleLogout = ()=>{
    oktaAuth.signOut();
  }

  

  return (
    <>
      <Container>
        <Box>
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ marginBottom: "1em", marginTop: "2em" }}
          >
            <Grid item md={2} marginRight='5%'>
              <FormControl>
                <div>
                  <input
                    type="text"
                    className="custom-input"
                    value={searchValue}
                    onChange={handleSearch}
                    required
                  />
                  <label className="custom-label">
                    Search Value
                  </label>
                </div>
              </FormControl>
            </Grid>
            <Grid item md={2} marginRight='5%'>
              <FloatingLabelDatePicker setValue={handleDateFrom} label="From" />
            </Grid>
            <Grid item md={2} marginRight='5%'>
              <FloatingLabelDatePicker setValue={handleDateTo} label="To" />
            </Grid>
            <Grid item md={2} >
                                          <div>
                                            <select
                                              className="custom-input"
                                              name="Sort By Price"
                                              id="sort"
                                              value={sort}
                                              onChange={handleSort}
                                            >
                                                <>
                                                <option key="1" value="1" >Ascending</option>
                                                <option key="2" value="2" >descending</option>
                                                </>
                                              
                                            </select>
                                            <label className='custom-label' htmlFor="Sort">Sort</label>
                                          </div>
               
            </Grid>
            <Grid item md={2} style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
              <Button sx={{color:'white',marginLeft:'5%'}} size="large" variant="contained" type="button" onClick={() => {
                  handleSubmit(searchValue, fromDate,toDate)
              }}>Submit</Button>
              <Button sx={{color:'white',marginLeft:'5%'}} size="large" variant="contained" type="button" onClick={handleLogout}>Logout</Button>
            </Grid>
          </Grid>
          <HotelList hotels={hotels} sort={sort} />
        </Box>
      </Container>
    </>
  );
};

export default SearchPage;
