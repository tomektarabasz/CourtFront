import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CityItem from './city-iteam';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

export const CityList: React.FC = () => {
  const cities = useSelector((state) => state.cities);
  if (cities?.length < 1 || cities == null) {
    return null;
  }
  return (
    <>
      {cities.map((city) => (
        <Ul key={city._id}>
          <CityItem
            id={city._id}
            name={city.name}
            region={city.wojewodztwo}
            province={city.powiat}
            area={city.gmina}
          />
        </Ul>
      ))}
    </>
  );
};
