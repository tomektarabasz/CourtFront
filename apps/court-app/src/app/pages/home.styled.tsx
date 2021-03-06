import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import background from '../../background.jpeg';

export const Background = styled.div`
  height:100%;
  width:100%;
  background-image: url(${background});
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cities: {
      display: 'flex',
      maxWidth: '600px',
      minWidth: '120px',
      flexDirection: 'column',
      padding:"3vw",
      height:"fit-content",
      borderRadius:20,
    },
    inputBackground: {
      backgroundColor: 'white',
      opacity: 0.7,
    },
  })
);
