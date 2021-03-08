import React from 'react';
import { useStyles } from './Home.styled';
import { CityList } from '../../components/city-search-result';
import { SearchInput } from '../../components/search-input';
import { RouteChildrenProps } from 'react-router-dom';
import { CourtList } from '../../components/court-list';
import { Paper } from '@material-ui/core';

type UrlParams = {
  queryCityName?: string;
  selectedCityId?: string;
};

export const Home: React.FC<RouteChildrenProps<UrlParams>> = ({ match }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.cities}>
        <SearchInput queryCityName={match.params.queryCityName} />
        <CityList selectedCityId={match.params.selectedCityId} />
        <CourtList />
    </Paper>
  );
};
