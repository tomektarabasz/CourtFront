import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { setSelectedCity } from '../api/state/actions';
import { AppState } from '../api/state/types';
import { LayoutNameDetail } from './layout-name-detail';

export interface CityItemProps {
  id: string;
  name: string;
  region?: string;
  province?: string;
  area?: string;
}

const StyledCityItem = styled.div`
  display: flex;
  height: '100%';
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'flex',
      minWidth: '100%',
      flexDirection: 'column',
      margin: '1.2ch 0 0 0',
      backgroundColor: 'rgba(68, 70, 92, 0.2)'
    },
    layout: {
      display: 'flex',
      width: '100%',
    },
    nameStyle: {
      display: 'flex',
      flexGrow: 1,
      width: '100%',
      justifyContent: 'center',
    },
    details: {
      display: 'flex',
      flexGrow: 1,
      width: '100%',
      color: 'black-gray',
      fontSize: '0.9ch',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  })
);

export function CityItem({ id, name, region, province, area }: CityItemProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedCity = useSelector<AppState>((state) => state.selectedCity);
  const handleClick = useCallback(() => {
    dispatch(setSelectedCity(id));
    browserHistory.push(`/selected/${id}`)
  }, [id, dispatch]);

  const browserHistory = useHistory()

  const isSelected = id === selectedCity;
  return (
    <StyledCityItem>
      <Button
        variant="outlined"
        color={isSelected ? 'secondary' : 'primary'}
        className={clsx(classes.button)}
        onClick={handleClick}
      >
        <LayoutNameDetail name={name} details={region + '-' + province + '-' + area}/>
      </Button>
    </StyledCityItem>
  );
}

export default CityItem;
