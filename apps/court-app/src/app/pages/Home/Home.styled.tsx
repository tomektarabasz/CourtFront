import styled from 'styled-components';
import {
    createStyles,
    makeStyles,
    Theme,
  } from '@material-ui/core';
import background from '../../../background.jpeg';

export const Background = styled.div`
  padding:10vh;
  height: 80%;
  background-image: url(${background});
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cities: {
      display:"flex",
      margin:"auto",
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