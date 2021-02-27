import React from 'react';
import { useStyles } from './Home.styled';
import { CityList } from '../../components/city-search-result';
import { SearchInput } from '../../components/searchInput';
import { RouteChildrenProps } from 'react-router-dom';

export const Home: React.FC<RouteChildrenProps<{ id: string }>> = ({match}) => {
  console.log({match})
  const classes = useStyles();
  return (
    <div className={classes.cities}>
      <SearchInput />
      <CityList />
    </div>
  );
};
