import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CityItem from './city-iteam';
import { Court } from './court-iteam';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

export const CourtList: React.FC = () => {
  const courts = useSelector((state) => state.courts);

  if (courts?.length < 1 || courts == null) {
    return null;
  }
  return (
    <>
      {courts.map((court) => (
        <Ul key={court._id}>
          <Court
            id={court._id}
            name={court.name}
            coverArea={court.coverArea}
          />
        </Ul>
      ))}
    </>
  );
};
