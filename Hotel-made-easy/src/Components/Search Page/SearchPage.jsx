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
import axios from 'axios'
import hotels from '../HotelList'

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
  const[searchValue, setSearchValue] = React.useState('')
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
      // await axios.post(`URL`,{
      //   keyword:keyword,
      //   fromDate:from,
      //   toDate: To
      // }).then( res => {
    
      // }).catch(err => {
    
      // })
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
            <Grid item md={2}>
              <FloatingLabelDatePicker setValue={handleDateTo} label="To" />
            </Grid>
            <Grid item md={2} style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
              <Button sx={{color:'white'}} size="large" variant="contained" type="button" onClick={() => {
                  handleSubmit(searchValue, fromDate,toDate)
              }}>Submit</Button>
            </Grid>
          </Grid>
          <HotelList hotels={hotels} />
        </Box>
      </Container>
    </>
  );
};

export default SearchPage;
