import React from 'react';
import { render } from '@testing-library/react';

import CityItem from './city-item';

describe('CityItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CityItem />);
    expect(baseElement).toBeTruthy();
  });
});
