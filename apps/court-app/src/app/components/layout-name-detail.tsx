import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { setSelectedCity } from '../api/state/actions';
import { AppState } from '../api/state/types';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'flex',
      minWidth: '100%',
      flexDirection: 'column',
      margin: '1.2ch 0 0 0',
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

interface Layout {
  name: string;
  details: string;
}

export const LayoutNameDetail: React.FC<Layout> = ({ name, details }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <div className={classes.nameStyle}>{name}</div>
      <div className={classes.details}>{details}</div>
    </div>
  );
};
