import React from 'react';
import { CityList } from '../../components/city-search-result';
import { RouteChildrenProps } from 'react-router-dom';
import { Home } from './Home';
import { CourtList } from '../../components/court-list';


type UrlParams = {
  queryCityName?: string;
};

export const CourtListPage: React.FC<RouteChildrenProps<UrlParams>> = ({ match }) => {
  return (
    <Home match={match}>
        <CityList selectedCityId={match.params.selectedCityId} />
        <CourtList />
    </Home>
  );
};