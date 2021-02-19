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
      display:"flex",
      maxWidth:"600px",
      minWidth:"120px",
      flexDirection:"column",
    },
    inputBackground: {
      backgroundColor: 'white',
      opacity:0.7,
    },

  })
);