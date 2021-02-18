import React from 'react';
import {
    FilledInput,
    FormControl,
    InputLabel,
  } from '@material-ui/core';
import clsx from 'clsx';
import { Background, useStyles } from './Home.styled';
import { getCities } from "@api/cityApi";

export const Home: React.FC = () => {
  const classes = useStyles();
  const handleBlur = () => {
    console.log("asdsdf")
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if(event.key === "Enter") {
          alert("evet.key")
          getCities()
      }
  }
  return (
      <Background>
        <div className={classes.cities}>
          <FormControl
            className={clsx(
              classes.cities,
              classes.textField,
              classes.inputBackground
            )}
            variant="filled"
          >
            <InputLabel htmlFor="city-input">Miasto</InputLabel>
            <FilledInput
              id="city-input"
              type={'text'}
              // value={values.password}
              onBlur={handleBlur}
              onKeyPress={handleKeyPress}
            />
          </FormControl>
        </div>
      </Background>
  );
};
