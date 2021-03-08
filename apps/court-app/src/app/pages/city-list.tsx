import React from 'react';
import { CityList } from '../components/city-search-result';
import { RouteChildrenProps } from 'react-router-dom';
import { Home } from './home';


type UrlParams = {
  queryCityName?: string;
};

export const CityListPage: React.FC<RouteChildrenProps<UrlParams>> = ({ match }) => {
  return (
    <Home match={match}>
        <CityList selectedCityId={match.params.selectedCityId} />
    </Home>
  );
};