import React, { useContext } from 'react';
import clsx from 'clsx';
import { AppState, City } from '../api/state/types';
import { LayoutNameDetail } from './layout-name-detail';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  makeStyles,
  Theme,
  createStyles,
  Button,
  Typography,
  ListItem,
  Divider,
} from '@material-ui/core';
import { ReportRounded } from '@material-ui/icons';
import { emphesizeArrayOfStrings } from '../utils/emhesizeString';

import { ThemeContext } from 'styled-components';

export interface CourtProps {
  id: string;
  name: string;
  coverArea: string;
}

const StyledCourtHeader = styled.div`
  display: flex;
  height: '100%';
`;

const CourtBox = styled.div``;

const CourtDetailsHeading = styled.div``;

const CourtDetails = styled.div`
  padding: 20px;
  border: 1px solid blue;
  color: ${(props) => props.theme.palette.primary.main};
  background-color: rgba(${(props) => props.theme.palette.primary.main}, 0.4);
  opacity: 0.8;
  font-family: ${(props) => props.theme.typography};
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
    divider: {
      backgroundColor: theme.palette.primary.main,
      marginBottom:"1.2ch",
    },
  })
);

export const Court: React.FC<CourtProps> = ({ id, name, coverArea }) => {
  const themeContext = useContext(ThemeContext);
  console.log('Current theme:', themeContext);

  const classes = useStyles();
  const selectedCityId = useSelector<AppState>((state) => state.selectedCity);
  const selectedCity: City = useSelector<AppState>((state) =>
    state.cities?.find((city) => city._id === selectedCityId)
  );
  //   const selectedCityId = useSelector<AppState>((state) => state.selectedCourt);
  const isSelected = id === selectedCityId;
  const handleClick = () => {
    console.log(id);
  };
  if (!selectedCity) {
    return null;
  }
  const stringToEphesize = [selectedCity.name, selectedCity.gmina];

  return (
    <CourtBox>
      <StyledCourtHeader>
        <Button
          variant="outlined"
          color={'primary'}
          className={clsx(classes.button)}
          onClick={handleClick}
        >
          <LayoutNameDetail name={name} details={'regionalny'} />
        </Button>
      </StyledCourtHeader>
      <CourtDetails>
        <CourtDetailsHeading>
          <Typography variant="caption"> Opis właściwiości sądu: </Typography>
          <Divider className={classes.divider} variant="fullWidth"></Divider>
        </CourtDetailsHeading>
        <span
          dangerouslySetInnerHTML={{
            __html: emphesizeArrayOfStrings(coverArea, stringToEphesize),
          }}
        />
      </CourtDetails>
    </CourtBox>
  );
};
