import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './Home.styled';
import { CityList } from '../../components/city-search-result';
import { SearchInput } from '../../components/search-input';
import { RouteChildrenProps } from 'react-router-dom';
import { AppState } from '../../api/state/types';
import { CourtList } from '../../components/court-list';

type UrlParams = {
  queryCityName?:string;
  selectedCityId?:string;
}

export const Home: React.FC<RouteChildrenProps<UrlParams>> = ({match}) => {
  
  const classes = useStyles();
  return (
    <div className={classes.cities}>
      <SearchInput queryCityName={match.params.queryCityName} />
      <CityList selectedCityId={match.params.selectedCityId} />
      <CourtList/>
    </div>
  );
};
