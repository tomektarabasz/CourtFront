import React, { useState } from 'react';
import { FilledInput, FormControl, InputLabel } from '@material-ui/core';
import clsx from 'clsx';
import { Background, useStyles } from './Home.styled';
import { City, getCities } from '@api/cityApi';
import { CitySearchResult } from '../../components/city-search-result';

export const Home: React.FC = () => {
  const classes = useStyles();
  const [cities, setCities] = useState([] as City[]);
  const handleBlur = (event) => {
    getCities(event.target.value, setCities);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getCities(event.target.value, setCities);
    }
  };
  return (
    <Background>
      <div className={classes.cities}>
        <FormControl
          className={clsx(
            classes.cities,
            classes.inputBackground
          )}
          variant="filled"
        >
          <InputLabel htmlFor="city-input">Miasto</InputLabel>
          <FilledInput
            id="city-input"
            type={'text'}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
          />
        </FormControl>
        <CitySearchResult cities={cities} />
      </div>
    </Background>
  );
};
