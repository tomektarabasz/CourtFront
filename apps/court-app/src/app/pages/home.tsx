import React from 'react';
import { useStyles } from './home.styled';
import { SearchInput } from '../components/search-input';
import { RouteChildrenProps } from 'react-router-dom';
import { Paper } from '@material-ui/core';

type UrlParams = {
  queryCityName?: string;
  selectedCityId?: string;
};

export const Home: React.FC<RouteChildrenProps<UrlParams>> = ({ match,children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.cities}>
        <SearchInput queryCityName={match.params.queryCityName} />
        {children}
    </Paper>
  );
};
