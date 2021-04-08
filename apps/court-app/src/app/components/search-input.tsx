import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteChildrenProps, useHistory } from 'react-router-dom';
import {
  createStyles,
  FilledInput,
  FormControl,
  InputLabel,
  makeStyles,
  Theme,
} from '@material-ui/core';
import clsx from 'clsx';
import { getCities } from '../api/cityApi';
import { setCities, setCityQuery } from '../api/state/actions';
import { AppState } from '../api/state/types';
import { CancelTokenSource } from 'axios';

import styled from "styled-components"

const TT = styled(FilledInput)`
  border: 3px solid red;
  padding:20px;
  margin: 30px;
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cities: {
      display: 'flex',
      maxWidth: '600px',
      minWidth: '120px',
      flexDirection: 'column',
    },
    inputBackground: {
      backgroundColor: 'white',
      opacity: 0.7,
    },
  })
);

interface SearchInputProps {
  queryCityName: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ queryCityName }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedCity = useSelector<AppState>((state) => state.selectedCity);
  const browserHistory = useHistory();
  const handleSearchStart = useCallback(
    (event) => {
      const value = event.target.value;
      dispatch(setCityQuery(value));
      browserHistory.push({
        pathname: `/search/${value}`,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (queryCityName) {
      handleSearchStart({ target: { value: queryCityName } });
    }
  }, []);

  const handleBlur = handleSearchStart;

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        handleSearchStart(event);
      }
    },
    [handleSearchStart]
  );

  console.log(queryCityName);
  return (
    <div className={classes.cities}>
      <FormControl
        className={clsx(classes.cities, classes.inputBackground)}
        variant="filled"
      >
        <InputLabel htmlFor="city-input">Miasto</InputLabel>
        <FilledInput
          id="city-input"
          type={'text'}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          defaultValue={queryCityName}
        />
      </FormControl>

      <TT
          id="city-input"
          type={'text'}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          defaultValue={queryCityName}
        />
    </div>
  );
};
