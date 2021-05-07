import React from 'react';
import './covid-country.styles.css';
import {NativeSelect, FormControl } from '@material-ui/core';

export const CovidCountry = ({country, handleCountryPick}) => {

      if (!country) {
            return 'loading';
      }

      return(
            <FormControl className = 'formControl' default = '' onChange = {(e) => {handleCountryPick(e.target.value)}}>
                  <NativeSelect>
                        <option value = 'global'> Global </option>
                        {country.map((countryCube,i) => <option key = {i} value = {countryCube.name}>{countryCube.name}</option>)}
                  </NativeSelect>
            </FormControl>
            
      )



}

