import React, { useState } from "react";
import { Field } from "formik";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // Choose a theme
import './search.css'

const FloatingLabelDatePicker = ({ setValue, label }) => {
 document.getElementsByClassName('input')[0]?.removeAttribute('readOnly')
 document.getElementsByClassName('input')[1]?.removeAttribute('readOnly')
  const [date, setDate] = useState('')
  return (
    <div className="form-field">
          <div>
            <Flatpickr
              options={{
                altInput: true,
                appendTo: document.body,
                // disable: [
                //   function(date) {
                //     // Disable dates beyond maxDate
                //     return date > new Date();
                //   }
                // ],
              }}
              onChange={(value) => {
                const startDate = new Date(value[0]);
                const startDateString = startDate.toLocaleDateString();
                const date = startDateString.split("/");
                const newdate = date[2]+"-"+(date[0].length==1?("0"+date[0]):date[0])+"-"+(date[1].length==1?("0"+date[1]):date[1]);
                setDate(newdate)
                setValue(newdate)
                // form.setFieldValue(field.name, value[0]);
              }}
              className="custom-input"
              required
            >
            </Flatpickr >
            <label className="custom-label" htmlFor={label}>
              {label}
            </label>
          </div>
    </div>
  );
};

export default FloatingLabelDatePicker;
