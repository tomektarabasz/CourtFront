import React from 'react';
import { CityItem } from '@court-front/ui';
import { City } from '../api/cityApi';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { useStyles } from '../pages/Home/Home.styled';

interface Props {
  cities: City[];
}

export const CitySearchResult: React.FC<Props> = ({ cities }) => {
  const classes = useStyles();
  if (cities?.length < 1) {
    return null;
  }
  return (
    <>
      {cities.map((city) => (
        <ui key={city.name + city.gmina}>
          <CityItem
            name={city.name}
            region={city.wojewodztwo}
            province={city.powiat}
            area={city.gmina}
          />
        </ui>
      ))}
    </>
  );
};
