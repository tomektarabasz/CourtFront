import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
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

export const SearchInput: React.FC<RouteChildrenProps<{ id: string }>> = ({
  match,
}) => {
  const [cancelationToken, setCancelationToken] = useState<
    undefined | CancelTokenSource
  >();
  console.log({ match });
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedCity = useSelector<AppState>((state) => state.selectedCity);
  const makeRequestToApi = useCallback(
    (event) => {
      dispatch(setCityQuery(event.target.value));
    },
    [dispatch]
  );

  const handleBlur = makeRequestToApi;

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        makeRequestToApi(event);
      }
    },
    [makeRequestToApi]
  );

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
        />
      </FormControl>
    </div>
  );
};
