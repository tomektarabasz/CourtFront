import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppState } from '../api/state/types';
import { Court } from './court-iteam';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

export const CourtList: React.FC = () => {
  const courts = useSelector((state) => state.courts);
  const selectedCity = useSelector((state:AppState)=>state.selectedCity)
  if (courts?.length < 1 || courts == null || !selectedCity ) {
    return null;
  }
  return (
    <>
      {courts.map((court) => (
        <Ul key={court._id}>
          <Court id={court._id} name={court.name} coverArea={court.coverArea} />
        </Ul>
      ))}
    </>
  );
};
