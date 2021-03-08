import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getCityById } from '../api/cityApi';
import { setCities, setSelectedCity } from '../api/state/actions';
import { AppState, City } from '../api/state/types';
import CityItem from './city-iteam';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

interface CityListProps {
  selectedCityId: string;
}

export const CityList: React.FC<CityListProps> = ({ selectedCityId }) => {
  const cities: City[] = useSelector((state: AppState) => state.cities);

  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedCityId) {
      const cityResponse = getCityById(selectedCityId);
      cityResponse.then(({response}) => {
        return dispatch(setCities([response.data]));
      })
      dispatch(setSelectedCity(selectedCityId));
    }
  }, []);

  if (cities?.length < 1 || cities == null) {
    return null;
  }

  if (selectedCityId) {
    const selectedCity: City | undefined =
      cities?.find((city) => city._id === selectedCityId);
    return (
      selectedCity && (
        <CityItem
          id={selectedCity._id}
          name={selectedCity.name}
          region={selectedCity.wojewodztwo}
          province={selectedCity.powiat}
          area={selectedCity.gmina}
        />
      )
    );
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
