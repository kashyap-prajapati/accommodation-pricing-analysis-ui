import React, { useState } from "react";
import { Field } from "formik";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // Choose a theme
import './search.css'

const FloatingLabelDatePicker = ({ setValue, label }) => {
 document.getElementsByClassName('input')[0]?.removeAttribute('readOnly')
 document.getElementsByClassName('input')[1]?.removeAttribute('readOnly')
  const [date, setDate] = useState('')
  console.log({date})
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
                // If you want to set the entire range as a string
                const startDateString = startDate.toLocaleDateString();
                setDate(startDateString)
                setValue(startDateString)
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
