import styled from 'styled-components';
import {
    createStyles,
    makeStyles,
    Theme,
  } from '@material-ui/core';
import background from '../../../background.jpeg';

export const Background = styled.div`
  height: 100%;
  background-image: url(${background});
  display:flex;
  justify-content:center;
  align-items:center;
`;


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cities: {
      minWidth:600
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    inputBackground: {
      backgroundColor: 'white',
    },

  })
);