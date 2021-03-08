import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import background from '../../../background.jpeg';
import { WrapText } from '@material-ui/icons';

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
    paper: {
      // padding: '10vh 10vw',
      maxHeight: '90vh',
      boxShadow:
        '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
    },
  })
);
